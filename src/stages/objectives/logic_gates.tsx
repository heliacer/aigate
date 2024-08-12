import { ObjectiveStage } from "../../stage";

(new (class extends ObjectiveStage {
  getComponent() {
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Game</p>
        <button onClick={this.triggerProceed}>submit</button>
      </>
    );
  }
})()).init();
