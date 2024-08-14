import { RulesetStage } from "../../stage"
import cursor from '../../assets/vectors/cursor.svg'
(new (class extends RulesetStage {
  GetComponent = () => {
    document.body.style.setProperty('cursor', 'none', 'important');
    return (
      <>
        <h1 className="aquamarine">Ruleset</h1>
        <p>
          Your mouse is no longer visible.<br/>
          A machine knows where it is.
        </p>
        <img src={cursor} alt="" />
        <button className="aquamarine" onClick={this.triggerProceed}>proceed</button>
      </>
    )
  }
})()).init()
