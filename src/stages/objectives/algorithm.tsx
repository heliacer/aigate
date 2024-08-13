import { ObjectiveStage } from "../../stage"
import select from '../../assets/sounds/select.mp3'

(new (class extends ObjectiveStage {
  private inputValue: number = 0

  private processAnswer = () => {
    if (this.inputValue === 8) {
      this.triggerProceed()
    } else {
      this.failStage()
    }
  }

  private InputHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    const audio = new Audio(select)
    audio.play()
    this.inputValue = parseInt(evt.target.value)
  }

  getComponent() {
    this.inputValue = 0
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Proceed the algorithm.</p><br />
        <p>0</p>
        <p>1</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>5</p>
        <input className="w-10 ml-5 mt-1" type="number" min={0} defaultValue={0} onChange={(evt) => {this.InputHandler(evt)}} />
        <button onClick={this.processAnswer}>submit</button>
      </>
    )
  }
})()).init()