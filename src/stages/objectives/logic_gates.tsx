import { GameManager } from "../../game";
import { ObjectiveStage } from "../../stage";



(new (class extends ObjectiveStage {
  getComponent() {
    return (
      <>
        <p>{GameManager.getInstance().currentObjective} Game</p>
        <button onClick={this.onSubmit}>submit</button>
      </>
    );
  }
})()).init();
