import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stage } from "../stage";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { GameManager } from "../game";

export default class extends Stage {
    startGame = () => {
        this.startTimer()
        GameManager.getInstance().generateStages(this.isMasterMode())
        this.triggerProceed()
    }

    toggleMasterMode = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        GameManager.getInstance().masterMode = !this.isMasterMode()
        event.currentTarget.innerText = this.isMasterMode() ? "ON" : "OFF"
    }

    GetComponent = () => {
        const totalWins = this.getTotalWins();

        return (
            <>
                <h1>AI GATE</h1>
                <p>
                    Welcome, Candidate. <br/><br/>

                    Your mission: complete all objectives and prove you are a robot. <br/><br/>

                    Follow the rulesets precisely.<br/>
                    You may need to inspect and execute code in the console to succeed. <br/><br/>

                    Fail even one objective, and you’re disqualified.<br/>
                    Only the flawless may proceed.<br/><br/>

                    No humans allowed. Good luck.
                </p>
                <br />
                <div className="flex items-center gap-2">
                    {totalWins > 0 && totalWins < 5 && (
                        <p className="vivid-blue">
                                                <FontAwesomeIcon icon={faLock} className="mr-1"/>
                                                Master mode: Locked
                                            </p>
                    )}
                    
                    {totalWins >= 5 && (
                        <>
                            <p className="cyclamen">Master mode:</p>
                            <button className="cyclamen" onClick={(event) => this.toggleMasterMode(event)}>
                                {GameManager.getInstance().masterMode ? "ON" : "OFF"}
                            </button>
                        </>
                    )}
                </div>
                <button onClick={this.startGame}>Proceed</button>
            </>
        );
    }
}
