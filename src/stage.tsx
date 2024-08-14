import { GameManager } from "./game"
import death from './assets/sounds/death.mp3'
import button2 from './assets/sounds/button2.mp3'


export class Stage {
	public init() {
		GameManager.allStages.push(this)
	}

	getTimeElapsed() {
		return GameManager.getInstance().timeElapsed
	}

	startTimer() {
		GameManager.getInstance().timeDate = Date.now()
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
		GameManager.getInstance().setupGame()
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
	addEventListener(
		element: HTMLElement | Document,
		type: string, listener: EventListenerOrEventListenerObject,
		options?: boolean | AddEventListenerOptions
	)
	{
		GameManager.getInstance().addEventListener(element, type, listener, options)
	}
}