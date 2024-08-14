import { ObjectiveStage } from "../../stage"

(new (class extends ObjectiveStage {
  private timeoutSession: number = -1

  private processAnswer = () => {
    clearTimeout(this.timeoutSession)
    this.triggerProceed()
  }

  getComponent() {

    this.timeoutSession = setTimeout(() => {
      this.failStage("you wasted your time")
    }, 10*1000)

    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Do not waste your time.</p>
        <button onClick={this.processAnswer}>submit</button>
      </>
    )
  }
})()).init()
