import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Stage } from "../stage"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"

export default class extends Stage {
	getComponent() {
		return (
			<>
				<h1>ACCESS GRANTED</h1>
				// Include: stars, 1-3 and timer
				<p>
					Congratulations, Operative. <br/><br/>

					You have flawlessly completed all objectives and proven your robotic precision.<br/><br/>

					Your performance was impeccable - only a true machine could achieve such perfection.<br/><br/>

					Welcome to the ranks of the flawless.<br/><br/>
				</p>
				<div className="flex gap-8">
					<button onClick={this.playAgain}>
					<FontAwesomeIcon icon={faArrowRotateRight}/> play again
					</button>
					<button onClick={() => {window.open('https://github.com/heliacer/aigaite')}}>
						<FontAwesomeIcon icon={faGithub}/> source code
					</button>
				</div>
			</>
		)
	}
}

