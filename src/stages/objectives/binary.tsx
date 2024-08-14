import { ObjectiveStage } from "../../stage"

(new (class extends ObjectiveStage {
  private inputValue: string = '00000000'
  private selectedHex: string = this.generateRandomHex()
  private selectedBinary: string = this.hexToBinary(this.selectedHex)

  private generateRandomHex(): string {
    const randomValue = Math.floor(Math.random() * 256)
    return randomValue.toString(16).toUpperCase().padStart(2, '0') 
  }

  private hexToBinary(hex: string): string {
    const binary = parseInt(hex, 16).toString(2).padStart(8, '0')
    return binary
  }

  private processAnswer = () => {
    if (this.inputValue === this.selectedBinary) {
      this.triggerProceed()
    } else {
      this.failStage()
    }
  }

  GetComponent = () => {
    this.selectedHex = this.generateRandomHex()
    this.selectedBinary = this.hexToBinary(this.selectedHex)

    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Convert the hexadecimal value to binary.</p><br />
        <p className="text-5xl">{this.selectedHex}</p>
        <input
          className="w-28 mt-3 text-center no-spinner"
          type="number"
          maxLength={8}
          placeholder="00000000"
          onChange={(evt) => { this.inputValue = evt.target.value }}
        />
        <button onClick={this.processAnswer}>submit</button>
      </>
    )
  }
})()).init()
