import { GameManager } from "./game";

export class Stage {
	public init() {
		GameManager.allStages.push(this);
	}

	getComponent() {
		return (
			<p>Uninitilized Stage</p>
		);
	}
}


export class ObjectiveStage extends Stage {
	onSubmit() {
    GameManager.getInstance().currentObjective++;
    GameManager.getInstance().passStage();
  }
}

export class RulesetStage extends Stage {
	
}