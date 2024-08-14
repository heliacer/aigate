import { ObjectiveStage } from "../../stage"

(new (class extends ObjectiveStage {
  private processAnswer = () => {
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.triggerProceed();
  }
  
  private moveButton = () => {
    const button = document.getElementById("SPECIAL");
    if (button) {
      const maxWidth = window.innerWidth - button.offsetWidth;
      const maxHeight = window.innerHeight - button.offsetHeight;

      const randomX = Math.random() * maxWidth;
      const randomY = Math.random() * maxHeight;

      button.style.position = "absolute";
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }

  private handleMouseMove = (event: MouseEvent) => {
    const button = document.getElementById("SPECIAL");
    if (button) {
      const buttonRect = button.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(event.clientX - (buttonRect.left + buttonRect.width / 2), 2) +
        Math.pow(event.clientY - (buttonRect.top + buttonRect.height / 2), 2)
      );

      if (distance < 200) {
        this.moveButton();
      }
    }
  }

  private attachMouseMoveHandler = () => {
    document.addEventListener("mousemove", this.handleMouseMove);
  }

  GetComponent = () => {
    this.attachMouseMoveHandler();
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <button id="SPECIAL" onClick={this.processAnswer}>proceed</button>
      </>
    )
  }
})()).init()
