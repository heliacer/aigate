import { ObjectiveStage } from "../../stage"

(new (class extends ObjectiveStage {
  private inputValue: string = '00000000'

  private processAnswer = () => {
    if (this.inputValue === '00101111') {
      this.triggerProceed()
    } else {
      this.failStage()
    }
  }

  getComponent() {
    this.inputValue = '00000000'
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Convert to binary.</p><br />
        <p className="text-5xl">2F</p>
        <input
          className="w-28 mt-3 text-center no-spinner"
          type="number" maxLength={8}
          defaultValue={"00000000"}
          onChange={(evt) => {this.inputValue = evt.target.value}}
        />
        <button onClick={this.processAnswer}>submit</button>
      </>
    )
  }
})()).init()