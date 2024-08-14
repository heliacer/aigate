import { RulesetStage } from "../../stage"
import mouseclick from '../../assets/vectors/mouseclick.svg'


(new (class extends RulesetStage {
  getComponent() {
    const handleRightClick: EventListener = (event: Event) => {
      event.preventDefault();
      this.failStage("A machine does not need fancy ways, Meatbag.");
    };

    this.addEventListener(
      document,
      'contextmenu',
      handleRightClick,
      false
    );

    return (
      <>
        <h1 className="aquamarine">Ruleset</h1>
        <p>
          You are no longer allowed to right click. <br/>
          A machine does not need fancy ways.
        </p>
        <img src={mouseclick} alt="" />
        <button className="aquamarine" onClick={this.triggerProceed}>proceed</button>
      </>
    )
  }
})()).init()
