import { RulesetStage } from "../../stage";
import mouse_correct from '../../assets/vectors/mouse_correct.svg';
import mouse_wrong from '../../assets/vectors/mouse_wrong.svg';

(new (class extends RulesetStage {
  private lastX: number | null = null;
  private lastY: number | null = null;
  private tolerance: number = 15; 
  
  private handleMouseMove = (event: MouseEvent): void => {
    if (this.lastX === null || this.lastY === null) {
      this.lastX = event.clientX;
      this.lastY = event.clientY;
      return;
    }

    const dx = event.clientX - this.lastX;
    const dy = event.clientY - this.lastY;

    if (Math.abs(dx) > this.tolerance && Math.abs(dy) > this.tolerance) {
      this.failStage("Your movements aren't precise enough, Fleshling.");
      return;
    }

    this.lastX = event.clientX;
    this.lastY = event.clientY;
  }
  
  getComponent() {
    this.lastX = null;
    this.lastY = null;

    const mouseMoveListener: EventListener = this.handleMouseMove as EventListener;
  
    this.addEventListener(
      document,
      'mousemove',
      mouseMoveListener,
      false
    );

    return (
      <>
        <h1 className="aquamarine">Ruleset</h1>
        <p>
          Your movements must be precise and deliberate. <br/>
          A machine’s movements are exact.
        </p>
        <img src={mouse_correct} alt="Correct movement" />
        <img src={mouse_wrong} alt="Wrong movement" />
        <button className="aquamarine" onClick={this.triggerProceed}>Proceed</button>
      </>
    );
  }
})()).init();
