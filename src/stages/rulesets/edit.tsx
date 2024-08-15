import { RulesetStage } from "../../stage"
import backspace from '../../assets/vectors/backspace.svg'

(new (class extends RulesetStage {
  GetComponent = () => {
    const handleKeydown: EventListener = (event: Event) => {
      const e = event as KeyboardEvent
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault()
        this.failStage("A machine’s response is absolute, Human.")
      }
    }

    this.addEventListener(
      document,
      'keydown',
      handleKeydown,
      false
    )

    return (
      <>
        <h1 className={this.isMasterMode() ? "cyclamen" : "aquamarine"}>Ruleset</h1>
        <p className={this.isMasterMode() ? "cyclamen" : ""}>
          You are no longer allowed to edit. <br/>
          A machine’s response is absolute.
        </p>
        <img src={backspace} alt="" />
        <button className={this.isMasterMode() ? "cyclamen" : "aquamarine"} onClick={this.triggerProceed}>proceed</button>
      </>
    )
  }
})()).init()
