import { useState, useEffect } from "react";
import "./Scenario.css";

const steps = [
  {
    id: 1,
    light: "🔴",
    lightClass: "red",
    title: "Red Light",
    instruction: "STOP! Wait at the footpath.",
    buttonText: "Wait",
  },
  {
    id: 2,
    light: "🟡",
    lightClass: "yellow",
    title: "Yellow Light",
    instruction: "Get Ready! Hold an adult's hand.",
    buttonText: "Hold Hand",
  },
  {
    id: 3,
    light: "🟢",
    lightClass: "green",
    title: "Green Light",
    instruction: "Look Left. Look Right. Walk slowly on Zebra Crossing.",
    buttonText: "Walk",
  },
  {
    id: 4,
    light: "🎉",
    lightClass: "success",
    title: "Great Job!",
    instruction: "You crossed the road safely! Always follow the rules.",
    buttonText: "Play Again",
  }
];

function Scenario() {
  const [stepIndex, setStepIndex] = useState(0);

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1.1; // Gentle pitch
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    // Read the instruction whenever the step changes
    speak(steps[stepIndex].instruction);
  }, [stepIndex]);

  const handleNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setStepIndex(0); // Reset
    }
  };

  const handleReadAloud = () => {
    speak(steps[stepIndex].instruction);
  };

  return (
    <div className="scenario-container">
      <h1>🚦 Crossing the Road</h1>
      <p className="scenario-subtitle">Follow the steps to cross safely</p>

      <div className="simulation-card">
        <div className="traffic-light-container">
          <div className={`light-circle ${steps[stepIndex].lightClass === "red" ? "active-red" : ""}`}></div>
          <div className={`light-circle ${steps[stepIndex].lightClass === "yellow" ? "active-yellow" : ""}`}></div>
          <div className={`light-circle ${steps[stepIndex].lightClass === "green" ? "active-green" : ""}`}></div>
        </div>
        
        <div className="scenario-content">
          <h2>{steps[stepIndex].light} {steps[stepIndex].title}</h2>
          
          <div className="instruction-box">
            <p>{steps[stepIndex].instruction}</p>
            <button className="read-btn" onClick={handleReadAloud} title="Read Aloud">
              🔊 Read
            </button>
          </div>

          <button className="action-btn" onClick={handleNextStep}>
            {steps[stepIndex].buttonText} ➡
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scenario;
