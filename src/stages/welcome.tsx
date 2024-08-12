import { GameManager } from "../game";
import { Stage } from "../stage";

export default class extends Stage {
	getComponent() {

		const onProceed = () => {

			console.log(GameManager.allStages);
						
			//run generate stages
			// run next stage
			GameManager.getInstance().passStage();
		};

		return (
			<>
				<p>hello I'm welcome and under the water</p>
				<button onClick={onProceed}>proceed</button>
			</>
		);
	}
};

