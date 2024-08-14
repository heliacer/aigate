import { ObjectiveStage } from "../../stage"

(new (class extends ObjectiveStage {
  getComponent() {
    const numRegularButtons = 20
    const buttons = []
    for (let i = 0; i < numRegularButtons; i++) {
      buttons.push(
        <button
          key={i}
          onClick={this.failStage}
          style={this.getRandomPositionStyle()}
        >
          proceed
        </button>
      )
    }
    buttons.push(
      <button
        id="SPECIAL"
        key='special'
        onClick={this.triggerProceed}
        style={this.getRandomPositionStyle()}
      >
        proceed
      </button>
    )

    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Proceed.</p>
        {buttons}
      </>
    )
  }

  getRandomPositionStyle(): React.CSSProperties {
    const top = Math.floor(Math.random() * 80) + 10 
    const left = Math.floor(Math.random() * 80) + 10 
    return {
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      transform: 'translate(-50%, -50%)',
    }
  }
})()).init()
