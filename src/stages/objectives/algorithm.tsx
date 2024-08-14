import { ObjectiveStage } from "../../stage"
import select from '../../assets/sounds/select.mp3'

type alogrithmType = {sequence: number[], result: number}

(new (class extends ObjectiveStage {
  private inputValue: number = 0

  private algorithms: alogrithmType[] = [
    { sequence: [0, 1, 1, 2, 3, 5], result: 8 }, // Fibonacci
    { sequence: [2, 4, 8, 16, 32], result: 64 }, // Powers of 2
    { sequence: [1, 4, 9, 16, 25], result: 36 }, // Squares
    { sequence: [3, 6, 9, 12, 15], result: 18 },
  ]

  private chosenAlgorithm: alogrithmType = {sequence: [], result: 0}

  private processAnswer = () => {
    if (this.inputValue === this.chosenAlgorithm.result) {
      this.triggerProceed()
    } else {
      this.failStage()
    }
  }

  private InputHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    (new Audio(select)).play()
    this.inputValue = parseInt(evt.target.value)
  }

  GetComponent = () => {
    this.inputValue = 0
    this.chosenAlgorithm = this.algorithms[Math.floor(Math.random() * this.algorithms.length)]
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Proceed the algorithm.</p><br />
        {this.chosenAlgorithm.sequence.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
        <input
          className="w-12 ml-5 mt-1"
          type="number" min={0}
          defaultValue={0}
          onChange={(evt) => {this.InputHandler(evt)}}
        />
        <button onClick={this.processAnswer}>submit</button>
      </>
    )
  }
})()).init()
