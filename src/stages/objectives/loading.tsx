import { ObjectiveStage } from "../../stage"

(new (class extends ObjectiveStage {
  getComponent() {
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Do not waste your time.</p>
        // subject to change
        <button onClick={this.triggerProceed}>submit</button>
      </>
    )
  }
})()).init()
