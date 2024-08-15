import { ObjectiveStage } from "../../stage"
import smile from '../../assets/vectors/smile.svg'

(new (class extends ObjectiveStage {
  private processAnswer = () => {
    this.triggerProceed()
  }
  GetComponent = () => {
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Does this emotion show happiness?</p>
        <br />
        <img src={smile} alt="" />
        <div className="flex gap-6">
          <button className="mb-0" onClick={() => this.failStage()}>Yes</button>
          <button className="mb-0" onClick={() => this.failStage()}>No</button>
        </div>
        <button
          style={{paddingLeft:55, paddingRight: 55}}
          onClick={this.processAnswer}
        >
          I don't know
        </button>
      </>
    )
  }
})()).init()
