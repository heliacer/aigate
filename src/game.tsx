import { Stage } from "./stage";
import EndStage from "./stages/end";
import WelcomeStage from "./stages/welcome";
import FailStage from "./stages/fail";
import button1 from './assets/sounds/button1.mp3';
import win from './assets/sounds/win.mp3';

type EventListenerEntry = {
  element: HTMLElement | Document,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
};

export class GameManager {
  private static instance: GameManager;
  public static allStages: Stage[] = [];
  private eventListeners: EventListenerEntry[] = [];

  private constructor(setCurrentPage: (element: JSX.Element) => void) {
    this.setCurrentStageComponent = setCurrentPage;
    this.setupGame();
    this.initializeStages();
  }

  public setupGame() {
    const stage = new WelcomeStage();
    this.setCurrentStageComponent(stage.getComponent());
    this.generateStages();
  }

  public currentObjective: number = 1;
  private currentStageIndex = -1;
  private gameStages: Stage[] = [];
  public timeDate: number = 0;
  public timeElapsed: number = 0;
  public setCurrentStageComponent: (element: JSX.Element) => void;

  public static getInstance(setCurrentPage?: (element: JSX.Element) => void): GameManager {
    if (!GameManager.instance) {
      if (setCurrentPage == null) throw new Error("GameManager isn't initialized");
      GameManager.instance = new GameManager(setCurrentPage);
    }
    return GameManager.instance;
  }

  public initializeStages(): void {
    const modules = import.meta.glob(['./stages/objectives/*.tsx', './stages/rulesets/*.tsx']);
    for (const path in modules) {
      modules[path]();
    }
  }

  public generateStages(): void {
    this.gameStages = GameManager.allStages;
  }

  public passStage(): void {
    this.currentStageIndex++;
    if (this.currentStageIndex === this.gameStages.length) {
      this.resetGame();
      const audio = new Audio(win);
      audio.play();
      const stage = new EndStage();
      this.setCurrentStageComponent(stage.getComponent());
      return;
    } else {
      const audio = new Audio(button1);
      audio.play();
    }

    const currentStage = this.gameStages[this.currentStageIndex];
    this.setCurrentStageComponent(currentStage.getComponent());
  }

  public failStage(): void {
    this.resetGame();
    const failStage = new FailStage();
    this.setCurrentStageComponent(failStage.getComponent());
  }

  public resetGame(): void {
    this.timeElapsed = Date.now() - this.timeDate;
    this.currentObjective = 1;
    this.currentStageIndex = -1;
    this.clearEventListeners();
  }

  public addEventListener(
    element: HTMLElement | Document,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    element.addEventListener(type, listener, options);
    this.eventListeners.push({ element, type, listener, options });
  }
  
  private clearEventListeners(): void {
    this.eventListeners.forEach(({ element, type, listener, options }) => {
      element.removeEventListener(type, listener, options);
    });
    this.eventListeners = [];
  }
}
