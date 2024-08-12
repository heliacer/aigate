// concept

import { FC } from "react";

export class GameManager {
  private static instance: GameManager;
  private constructor() { }

  public currentStage: number = 0;

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public generateStages(): Stage[] {
    return [];
  }

  public passStage(stage: Stage): void {
    // load next
  }

  public failStage(stage: Stage): void {
    // load fail stage
  }


}

class Stage {
  getComponent(): FC {
    // returns stage component
    return () => <h1>Stage</h1>
  }
}


export class ObjectiveStage extends Stage {
  
}

export class RulesetStage extends Stage {
  
}