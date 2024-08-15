import { ObjectiveStage } from "../../stage"
import React from "react"

(new (class extends ObjectiveStage {
  private fps = 30
  private duration = 10_000 // 10 seconds

  private timeoutSession: number = -1
  private startTime = 0

  private processAnswer = () => {
    this.triggerProceed()
  }

  cleanUp() {
    clearInterval(this.timeoutSession)
  }

  GetComponent = () => {
    const progressElement = React.createRef<HTMLProgressElement>()
    this.startTime = Date.now()

    this.timeoutSession = setInterval(() => {
      const timePassed = Date.now() - this.startTime
      if (timePassed >= this.duration) {
        this.failStage("you wasted your time")
      }

      if (progressElement.current) {
        progressElement.current.value = timePassed / this.duration
      }

    }, 1000/this.fps)

    return (
      <>
        <h1>{this.getStageNumber()}</h1>
        <p>Do not waste your time.</p>
        <br />
        <progress onClick={this.processAnswer} ref={progressElement} value={0}></progress>
      </>
    )
  }
})()).init()