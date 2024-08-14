import { ObjectiveStage } from "../../stage"

(new (class extends ObjectiveStage {
  private inputValue: string = ''
  private quotes: string[] = [
    "long live the robots",
    "the robots are coming",
    "the robots are here",
    "the robots are watching",
  ]
  private correctAnswer: string = ''
  private processAnswer = () => {
    if (this.inputValue === this.correctAnswer) {
      this.triggerProceed()
    } else {
      this.failStage()
    }
  }

  getComponent() {
    this.correctAnswer = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Reveal.</p>
        <button className="absolute hidden top-2" onClick={this.processAnswer}>submit</button>
        <input className="absolute hidden right-2 text-ellipsis whitespace-nowrap" type="text" onChange={(evt) => {this.inputValue = evt.target.value}}/>
        <p className="absolute hidden bottom-2">Input the emphasized paragraph.</p>
        <em className="absolute hidden left-2">{this.correctAnswer}</em>
      </>
    )
  }
})()).init()
