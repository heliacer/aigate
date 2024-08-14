import { ObjectiveStage } from "../../stage"
import gates from '../../assets/vectors/gates.svg'
import select from '../../assets/sounds/select.mp3'

(new (class extends ObjectiveStage {
  private inputA: number = 0
  private inputB: number = 0

  private processAnswer = () => {
    if (this.inputA === 0 && this.inputB === 1) {
      this.triggerProceed()
    } else {
      this.failStage()
    }
  }

  private InputHandler = (evt: React.ChangeEvent<HTMLInputElement>, inputType: 'A' | 'B') => {
    (new Audio(select)).play()
    const value = parseInt(evt.target.value)
    if (inputType === 'A') {
      this.inputA = value
    } else {
      this.inputB = value
    }
  }

  GetComponent = () => {
    this.inputA = 0
    this.inputB = 0
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Calculate the missing inputs.</p>
        <img draggable='false' src={gates} alt="" />
        <div className="flex gap-5 mt-1">
          <p className="m-0">A</p>
          <input
            type="number"
            min={0}
            max={1}
            defaultValue={0}
            onChange={(evt) => this.InputHandler(evt, 'A')}
          />
        </div>
        <br />
        <div className="flex gap-5 mb-1">
          <p className="m-0">B</p>
          <input
            type="number"
            min={0}
            max={1}
            defaultValue={0}
            onChange={(evt) => this.InputHandler(evt, 'B')}
          />
        </div>
        <button onClick={this.processAnswer}>submit</button>
      </>
    )
  }
})()).init()
