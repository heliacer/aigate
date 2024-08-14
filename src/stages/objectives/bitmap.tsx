import { ObjectiveStage } from "../../stage"
import select from '../../assets/sounds/select.mp3'

(new (class extends ObjectiveStage {
  private binaryDigits = Array(16).fill(0)
  private cellStates = Array(16).fill(0)

  private processAnswer = () => {
    const allToggledCorrectly = this.binaryDigits.every((digit, index) => this.cellStates[index] === digit)

    if (allToggledCorrectly) {
      this.triggerProceed()
    } else {
      this.failStage()
    }
  }

  private toggleCell = (index: number) => {
    (new Audio(select)).play()
    this.cellStates[index] = this.cellStates[index] === 0 ? 1 : 0
    const cell = document.getElementById(`cell-${index}`)
    if (cell) {
      cell.style.backgroundColor = this.cellStates[index] === 1 
        ? "rgb(var(--vivid-blue))" 
        : "rgba(var(--vivid-blue), 0.2)"
    }
  }

  GetComponent = () => {
    this.binaryDigits = Array(16).fill(0).map(() => Math.round(Math.random()))
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Render the monochrome payload</p>
        <p>Binary Payload: {this.binaryDigits.join('')}</p>
        <div className="grid grid-cols-4 gap-1.5 mt-5">
          {this.binaryDigits.map((_, index) => (
            <div
              key={index}
              id={`cell-${index}`}
              className="w-7 h-7 binary-cell"
              onClick={() => this.toggleCell(index)}
              style={{ backgroundColor: this.cellStates[index] === 1 ? "rgb(var(--vivid-blue))" : "rgba(var(--vivid-blue), 0.2)" }}
            ></div>
          ))}
        </div>
        <button onClick={this.processAnswer} className="mt-5">
          submit
        </button>
      </>
    )
  }
})()).init()
