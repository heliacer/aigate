import { GameManager } from "./game"
import death from './assets/sounds/death.mp3'
import button2 from './assets/sounds/button2.mp3'


export class Stage {
	public init() {
		GameManager.allStages.push(this)
	}

	getTotalWins() {
		return GameManager.getInstance().winsCounter
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

	GetComponent = () => {
		return (
			<p>Uninitilized Stage</p>
		)
	}

	failStage(reason?: string) {
		(new Audio(death)).play()
		this.cleanUp()
		GameManager.getInstance().failStage(reason)
	}

	playAgain() {
		(new Audio(button2)).play()
		GameManager.getInstance().setupGame()

	}

	cleanUp() {

	}

}

export class ObjectiveStage extends Stage {
  getStageNumber() {
    return GameManager.getInstance().currentObjective.toString().padStart(2, "0")
  }
	
	triggerProceed() {
    this.cleanUp()
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