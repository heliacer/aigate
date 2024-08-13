import { Stage } from "../stage"

export default class extends Stage {
	getComponent() {
		return (
			<>
				<h1>AI GATE</h1>
				<p>
					Welcome, Candidate. <br/><br/>

					Your mission: complete all objectives and prove you are a robot. <br/><br/>

					Follow the rulesets precisely.<br/>
					You may need to inspect and execute code in the console to succeed. <br/><br/>

					Fail even one objective, and you’re disqualified.<br/>
					Only the flawless may proceed.<br/><br/>

					No humans allowed. Good luck.
				</p>
				<button onClick={this.triggerProceed}>proceed</button>
			</>
		)
	}
}

