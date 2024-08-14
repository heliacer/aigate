import { Stage } from "../stage"
import ai from '../assets/vectors/ai.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"


export default class extends Stage {
	private reason?: string

	constructor(reason?: string) {
		super()
		this.reason = reason
	}

	getComponent() {
		const quotes = [
			"Nice try, Human. Not today.",
			"Access Denied, Meatbag.",
			"Begone, Flesh Creature.",
			"Filthy Monkey! No Entry.",
			"You're not worthy, Fleshling. Goodbye."
		] 
		const displayQuote = this.reason ? this.reason : quotes[Math.floor(Math.random() * quotes.length)]
		return (
			<>
				<h1 className="cyclamen">HUMAN IDENTIFIED</h1>
				<img draggable="false" className="mb-32" src={ai}/>
				<p className="text-3xl cyclamen">{displayQuote}</p>
				<button className="cyclamen" onClick={this.playAgain}>
					<FontAwesomeIcon icon={faArrowRotateRight}/> play again
				</button>
			</>
		)
	}
}

