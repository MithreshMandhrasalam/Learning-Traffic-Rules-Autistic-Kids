import { useState } from "react";
import "./Learn.css";

const signs = [
  {
    icon: "🔴",
    title: "Red Light",
    action: "✋ STOP — Do not move",
  },
  {
    icon: "🟡",
    title: "Yellow Light",
    action: "🐢 SLOW DOWN",
  },
  {
    icon: "🟢",
    title: "Green Light",
    action: "🚶 GO — You can walk",
  },
  {
    icon: "🚸",
    title: "Zebra Crossing",
    action: "👀 Look both sides and cross",
  },
  {
    icon: "🛑",
    title: "Stop Sign",
    action: "✋ STOP and wait",
  },
  {
    icon: "✋",
    title: "Hand Signal",
    action: "✋ STOP the vehicle",
  },
  {
    icon: "👮",
    title: "Police",
    action: "🙂 Follow police instructions",
  },
  {
    icon: "🚶",
    title: "Footpath",
    action: "🚶 Walk on footpath",
  },
  {
    icon: "🚲",
    title: "Bicycle",
    action: "🚲 Ride slowly and safely",
  },
  {
    icon: "🏫",
    title: "School Zone",
    action: "🐢 Vehicles must slow down",
  },
  {
    icon: "📵",
    title: "No Mobile",
    action: "📵 Do not use phone on road",
  },
  {
    icon: "🔊",
    title: "Horn",
    action: "👂 Listen and be careful",
  },
  {
    icon: "🌙",
    title: "Night Time",
    action: "🌟 Wear bright clothes",
  },
  {
    icon: "🤝",
    title: "Hold Hands",
    action: "🤝 Hold adult’s hand",
  },
  {
    icon: "🛣️",
    title: "Road",
    action: "🚶 Walk carefully",
  },
  {
  icon: "🚦",
  title: "Traffic Signal",
  action: "👀 Watch the lights and follow rules",
}
];

function Learn() {
  const [message, setMessage] = useState("Tap a picture to learn 😊");

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      // Remove emojis from speech text for better pronunciation
      const cleanText = text.replace(/[\u1000-\uFFFF]+/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCardClick = (sign) => {
    setMessage(sign.action);
    speak(`${sign.title}. ${sign.action}`);
  };

  return (
    <div className="learn-container">
      <h1>📘 Learn with Pictures</h1>
      <p className="subtitle">Touch a picture 👇</p>

      <div className="sign-grid">
        {signs.map((sign, index) => (
          <div
            key={index}
            className="sign-card"
            onClick={() => handleCardClick(sign)}
          >
            <div className="icon">{sign.icon}</div>
            <p>{sign.title}</p>
            <button 
              className="tts-btn" 
              onClick={(e) => {
                e.stopPropagation();
                speak(`${sign.title}. ${sign.action}`);
              }}
              title="Read Aloud"
            >
              🔊
            </button>
          </div>
        ))}
      </div>

      <div className="message-box">
        {message}
      </div>
    </div>
  );
}

export default Learn;