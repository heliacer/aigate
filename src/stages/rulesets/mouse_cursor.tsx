import { RulesetStage } from "../../stage";

(new (class extends RulesetStage {
  getComponent() {
    return (
      <>
        <h1 className="aquamarine">Ruleset</h1>
        <p>bla bla</p>
        <button className="aquamarine" onClick={this.triggerProceed}>proceed</button>
      </>
    );
  }
})()).init();
