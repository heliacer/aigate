import { GameManager } from "./game"
import scifi_button from './assets/scifi_button.mp3'

export class Stage {
	public init() {
		GameManager.allStages.push(this)
	}

	triggerProceed() {
		const audio = new Audio(scifi_button)
		audio.play();
		GameManager.getInstance().passStage()
  }

	getComponent() {
		return (
			<p>Uninitilized Stage</p>
		)
	}

	resetGame() {
		GameManager.getInstance().resetGame()
	}

}

export class ObjectiveStage extends Stage {
  getStageNumber() {
    return GameManager.getInstance().currentObjective.toString().padStart(2, "0")
  }
	
	triggerProceed() {
		const audio = new Audio(scifi_button)
		audio.play();
    GameManager.getInstance().currentObjective++
    GameManager.getInstance().passStage()
  }
}

export class RulesetStage extends Stage {

}