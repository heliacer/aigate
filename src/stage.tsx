import { GameManager } from "./game"
import death from './assets/sounds/death.mp3'
import button2 from './assets/sounds/button2.mp3'


export class Stage {
	public init() {
		GameManager.allStages.push(this)
	}

	triggerProceed() {
		GameManager.getInstance().passStage()
  }

	getComponent() {
		return (
			<p>Uninitilized Stage</p>
		)
	}

	failStage() {
		GameManager.getInstance().failStage()
		const audio = new Audio(death)
		audio.play()
	}

	playAgain() {
		GameManager.getInstance().resetGame()
		const audio = new Audio(button2)
		audio.play()

	}

}

export class ObjectiveStage extends Stage {
  getStageNumber() {
    return GameManager.getInstance().currentObjective.toString().padStart(2, "0")
  }
	
	triggerProceed() {
    GameManager.getInstance().currentObjective++
    GameManager.getInstance().passStage()
  }
}

export class RulesetStage extends Stage {

}