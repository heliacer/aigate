import { RulesetStage } from "../../stage"
import backspace from '../../assets/vectors/backspace.svg'

(new (class extends RulesetStage {
  getComponent() {
    const handleKeydown: EventListener = (event: Event) => {
      const e = event as KeyboardEvent;
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        this.failStage();
      }
    };

    this.addEventListener(
      document,
      'keydown',
      handleKeydown,
      false
    );

    return (
      <>
        <h1 className="aquamarine">Ruleset</h1>
        <p>
          You are no longer allowed to edit. <br/>
          A machine’s response is absolute.
        </p>
        <img src={backspace} alt="" />
        <button className="aquamarine" onClick={this.triggerProceed}>proceed</button>
      </>
    )
  }
})()).init()
