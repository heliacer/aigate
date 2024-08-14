import { Stage } from "./stage"
import EndStage from "./stages/end"
import WelcomeStage from "./stages/welcome"
import FailStage from "./stages/fail"
import button1 from './assets/sounds/button1.mp3'
import win from './assets/sounds/win.mp3'
import { useState } from "react"

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
    this.initializeStages()
    this.setupGame()
  }

  public setupGame() {
    const stage = new WelcomeStage()
    this.setCurrentStageComponent(stage.getComponent())
    this.generateStages()
  }

  public currentObjective: number = 1
  private currentStageIndex = -1
  private gameStages: Stage[] = []
  public timeDate: number = 0
  public timeElapsed: number = 0
  public setCurrentStageComponent: (element: JSX.Element) => void

  public static getInstance(setCurrentPage?: (element: JSX.Element) => void): GameManager {
    if (!GameManager.instance) {
      if (setCurrentPage == null) throw new Error("GameManager isn't initialized")
      GameManager.instance = new GameManager(setCurrentPage)
    }
    return GameManager.instance
  }

  public initializeStages(): void {
    const modules = import.meta.glob(['./stages/objectives/*.tsx', './stages/rulesets/*.tsx'])
    for (const path in modules) {
      modules[path]()
    }
  }

  public generateStages(): void {
    this.gameStages = GameManager.allStages
  }

  public getClickerPage: React.FC = () => {
    const [clicks, setClicks] = useState(0);

    return <>
      <h1 onClick={() => setClicks(clicks + 1)}>cookie clicker: {clicks}</h1>
    </>
  }

  public passStage(): void {
    this.currentStageIndex++
    if (this.currentStageIndex === this.gameStages.length) {
      (new Audio(win)).play()
      this.resetGame()
      const stage = new EndStage()
      this.setCurrentStageComponent(stage.getComponent())
      return
    }

    (new Audio(button1)).play()
    const currentStage = this.gameStages[this.currentStageIndex]
    this.setCurrentStageComponent(currentStage.getComponent())
  }

  public failStage(reason?: string): void {
    this.resetGame()
    const failStage = new FailStage(reason)
    this.setCurrentStageComponent(failStage.getComponent())
  }

  public resetGame(): void {
    document.body.style.cursor = 'auto'
    this.timeElapsed = Date.now() - this.timeDate
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
