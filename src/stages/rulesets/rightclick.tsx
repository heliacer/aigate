import { RulesetStage } from "../../stage"
import mouseclick from '../../assets/vectors/mouseclick.svg'


(new (class extends RulesetStage {
  GetComponent = () => {
    const handleRightClick: EventListener = (event: Event) => {
      event.preventDefault()
      this.failStage("A machine does not need fancy ways, Meatbag.")
    }

    this.addEventListener(
      document,
      'contextmenu',
      handleRightClick,
      false
    )

    return (
      <>
        <h1 className={this.isMasterMode() ? "cyclamen" : "aquamarine"}>Ruleset</h1>
        <p className={this.isMasterMode() ? "cyclamen" : ""}>
          You are no longer allowed to right click. <br/>
          A machine does not need fancy ways.
        </p>
        <img src={mouseclick} alt="" />
        <button className={this.isMasterMode() ? "cyclamen" : "aquamarine"} onClick={this.triggerProceed}>proceed</button>
      </>
    )
  }
})()).init()
