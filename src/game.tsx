import { ObjectiveStage, RulesetStage, Stage } from "./stage"
import EndStage from "./stages/end"
import WelcomeStage from "./stages/welcome"
import FailStage from "./stages/fail"
import button1 from './assets/sounds/button1.mp3'
import win from './assets/sounds/win.mp3'

type EventListenerEntry = {
  element: HTMLElement | Document,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
}

export class GameManager {
  private static instance: GameManager

  public static allStages: Stage[] = []
  private eventListeners: EventListenerEntry[] = []

  private constructor(setCurrentPage: (element: JSX.Element) => void) {
    this.setCurrentStageComponent = setCurrentPage
    this.initializeStages().then(() => this.setupGame())
  }

  public setupGame() {
    const stage = new WelcomeStage() as Stage
    this.setCurrentStageComponent(stage.GetComponent())
    this.generateStages(this.masterMode)
  }

  public currentObjective: number = 1
  private currentStageIndex = -1
  private gameStages: Stage[] = []
  public masterMode: boolean = false
  public timeDate: number = 0
  public timeElapsed: number = 0
  public winsCounter = 0
  public setCurrentStageComponent: (element: JSX.Element) => void

  public static getInstance(setCurrentPage?: (element: JSX.Element) => void): GameManager {
    if (!GameManager.instance) {
      if (setCurrentPage == null) throw new Error("GameManager isn't initialized")
      GameManager.instance = new GameManager(setCurrentPage)
    }
    return GameManager.instance
  }

  public async initializeStages(): Promise<void> {
    const modules = import.meta.glob(['./stages/objectives/*.tsx', './stages/rulesets/*.tsx'])
    await Promise.all(
      Object.keys(modules).map((path) => modules[path]())
    )
  }
  
  
  public generateStages(masterMode: boolean): void{
    let objectiveStages = GameManager.allStages.filter(x => x instanceof ObjectiveStage)
    const rulesetStages = GameManager.allStages.filter(x => x instanceof RulesetStage)
    if (masterMode) {
      this.gameStages= [
        ...rulesetStages,
        ...objectiveStages
      ]
    } else{
      objectiveStages = objectiveStages.sort(() => Math.random() - 0.5)
      const [first, second] = objectiveStages.splice(-2)
      let mixedStages = [...objectiveStages, ...rulesetStages]
      mixedStages = mixedStages.sort(() => Math.random() - 0.5)
      this.gameStages = [first, ...mixedStages, second]
    }
  }
  
  
  public getCurrentStage(): Stage{
    if (this.currentStageIndex === -1) return new WelcomeStage()
    return this.gameStages[this.currentStageIndex]
  }

  public passStage(): void {
    this.currentStageIndex++
    if (this.currentStageIndex === this.gameStages.length) {
      (new Audio(win)).play()
      this.resetGame()
      const stage = new EndStage()
      this.winsCounter++
      this.setCurrentStageComponent(stage.GetComponent())
      return
    }

    (new Audio(button1)).play()
    const currentStage = this.getCurrentStage()
    this.setCurrentStageComponent(currentStage.GetComponent())
  }

  public failStage(reason?: string): void {
    this.resetGame()
    const failStage = new FailStage(reason)
    this.setCurrentStageComponent(failStage.GetComponent())
  }

  public resetGame(): void {
    document.body.classList.remove('cursor-none')
    this.timeElapsed = Date.now() - this.timeDate
    this.generateStages(this.masterMode)
    this.currentObjective = 1
    this.currentStageIndex = -1
    this.clearEventListeners()
  }

  public addEventListener(
    element: HTMLElement | Document,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    element.addEventListener(type, listener, options)
    this.eventListeners.push({ element, type, listener, options })
  }
  
  private clearEventListeners(): void {
    this.eventListeners.forEach(({ element, type, listener, options }) => {
      element.removeEventListener(type, listener, options)
    })
    this.eventListeners = []
  }
}
