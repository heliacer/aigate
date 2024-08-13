import { ObjectiveStage } from "../../stage"
import logic_gates from '../../assets/vectors/logic_gates.svg'

(new (class extends ObjectiveStage {
  getComponent() {
    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Objective: Calculate the missing inputs.</p>
        <img draggable='false' src={logic_gates} alt=""/>
        <div className="flex gap-5 mt-1">
          <p className="m-0">A</p>
          <input type="number" min={0} max={1}/>
        </div>
        <br />
        <div className="flex gap-5 mb-1">
          <p className="m-0">B</p>
          <input type="number" min={0} max={1}/>
        </div>
        <button onClick={this.triggerProceed}>submit</button>
      </>
    )
  }
})()).init()
