import { Stage } from "./stage";
import EndStage from "./stages/end";
import WelcomeStage from "./stages/welcome";
import FailStage from "./stages/fail";

export class GameManager {
  private static instance: GameManager;

  public static allStages: Stage[] = [];

  private constructor(setCurrentPage: (element: JSX.Element) => void) {
    this.setCurrentStageComponent = setCurrentPage;

    const stage = new WelcomeStage();
    this.setCurrentStageComponent(stage.getComponent());
    this.initilizeStages();

    this.generateStages();
  }

  public currentObjective: number = 1;
  
  private currentStageIndex = -1;
  private gameStages: Stage[] = [];
  public setCurrentStageComponent: (element: JSX.Element) => void;

  public static getInstance(setCurrentPage?: (element: JSX.Element) => void): GameManager {
    if (!GameManager.instance) {
      if (setCurrentPage == null) throw "game manager isn't initilized";
      GameManager.instance = new GameManager(setCurrentPage);
    }
    return GameManager.instance;
  }

  public initilizeStages(): void {
    const modules =  import.meta.glob(['./stages/objectives/*.tsx', './stages/rulesets/*.tsx']);

    for (const path in modules) {
      modules[path]();
    }
  }
  
  public generateStages(): void {
    this.gameStages = GameManager.allStages;
  }

  public passStage(): void {
    // load next
    this.currentStageIndex++;

    if (this.currentStageIndex == this.gameStages.length) {
      const stage = new EndStage();
      this.setCurrentStageComponent(stage.getComponent())
      return;
    }

    const currentStage = this.gameStages[this.currentStageIndex];
    this.setCurrentStageComponent(currentStage.getComponent());
  }

  public failStage(): void {
    // handle fail
    const failStage = new FailStage();
    this.setCurrentStageComponent(failStage.getComponent());
  } 
}