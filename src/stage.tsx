import { GameManager } from "./game";

export class Stage {
	public init() {
		GameManager.allStages.push(this);
	}

	triggerProceed() {
    GameManager.getInstance().passStage();
  }

	getComponent() {
		return (
			<p>Uninitilized Stage</p>
		);
	}
}


export class ObjectiveStage extends Stage {
  getStageNumber() {
    return GameManager.getInstance().currentObjective.toString().padStart(2, "0");
  }
	
	triggerProceed() {
    GameManager.getInstance().currentObjective++;
    GameManager.getInstance().passStage();
  }
}

export class RulesetStage extends Stage {

}