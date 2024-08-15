import { RulesetStage } from "../../stage"
import cursor from '../../assets/vectors/cursor.svg'
(new (class extends RulesetStage {
  GetComponent = () => {
    document.body.classList.toggle('cursor-none')
    return (
      <>
        <h1 className={this.isMasterMode() ? "cyclamen" : "aquamarine"}>Ruleset</h1>
        <p className={this.isMasterMode() ? "cyclamen" : ""}>
          Your mouse is no longer visible.<br/>
          A machine knows where it is.
        </p>
        <img src={cursor} alt="" />
        <button className= {this.isMasterMode() ? "cyclamen" : "aquamarine"} onClick={this.triggerProceed}>proceed</button>
      </>
    )
  }
})()).init()
