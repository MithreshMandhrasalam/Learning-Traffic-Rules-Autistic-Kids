import { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question: "🚦 What does a RED traffic signal mean?",
    correct: "STOP",
    options: ["STOP", "GO", "SLOW DOWN"],
  },
  {
    question: "🟡 What should you do at a YELLOW signal?",
    correct: "SLOW DOWN",
    options: ["STOP", "GO", "SLOW DOWN"],
  },
  {
    question: "🟢 What does a GREEN signal mean?",
    correct: "GO",
    options: ["STOP", "GO", "SLOW DOWN"],
  },
  {
    question: "🚸 What should you do at a zebra crossing?",
    correct: "STOP",
    options: ["STOP", "RUN", "IGNORE"],
  },
  {
    question: "🚶 When should we cross the road?",
    correct: "LOOK BOTH SIDES",
    options: ["LOOK BOTH SIDES", "RUN FAST", "CLOSE EYES"],
  },
  {
    question: "🛑 What does a STOP sign mean?",
    correct: "STOP",
    options: ["STOP", "GO", "HORN"],
  },
  {
    question: "🚲 Should you ride a bicycle on the road carefully?",
    correct: "YES",
    options: ["YES", "NO", "RUN"],
  },
  {
    question: "👮 Who helps control traffic?",
    correct: "POLICE",
    options: ["POLICE", "TEACHER", "FRIEND"],
  },
  {
    question: "✋ What does a raised hand signal mean?",
    correct: "STOP",
    options: ["STOP", "GO", "TURN"],
  },
  {
    question: "📵 Can we use mobile while crossing road?",
    correct: "NO",
    options: ["YES", "NO", "MAYBE"],
  },
  {
    question: "🧒 Should children hold an adult’s hand while crossing?",
    correct: "YES",
    options: ["YES", "NO", "RUN"],
  },
  {
    question: "🚗 What should cars do near school?",
    correct: "SLOW DOWN",
    options: ["SLOW DOWN", "GO FAST", "HORN"],
  },
  {
    question: "🔊 What should you do if you hear a horn?",
    correct: "BE CAREFUL",
    options: ["BE CAREFUL", "RUN", "IGNORE"],
  },
  {
    question: "🛣️ Should we walk on the footpath?",
    correct: "YES",
    options: ["YES", "NO", "ROAD"],
  },
  {
    question: "🌙 At night, should we wear bright clothes?",
    correct: "YES",
    options: ["YES", "NO", "DARK CLOTHES"],
  },
];

function Quiz() {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[\u1000-\uFFFF]+/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleReadQuestion = () => {
    const textToRead = questions[index].question + ". Options are: " + questions[index].options.join(", ");
    speak(textToRead);
  };

  const handleOptionClick = (option) => {
    if (option === questions[index].correct) {
      const msg = "✅ Great job! You are right 🌟";
      setFeedback(msg);
      speak("Great job! You are right");
    } else {
      const msg = "❌ Oops! Try again 😊";
      setFeedback(msg);
      speak("Oops! Try again");
    }

    // Move to next question automatically after 1.5 seconds
    setTimeout(() => {
      setFeedback("");
      setIndex((prev) => (prev + 1) % questions.length);
    }, 1500);
  };

  return (
    <div className="quiz-container">
      <h1>📝 Traffic Rules Quiz</h1>

      <div className="question-card">
        <div className="question-header">
          <h2>{questions[index].question}</h2>
          <button className="read-btn" onClick={handleReadQuestion} title="Read Question">
            🔊 Read
          </button>
        </div>

        <div className="options">
          {questions[index].options.map((opt) => (
            <button
              key={opt}
              className="option-btn"
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {feedback && <p className="feedback">{feedback}</p>}
      </div>
    </div>
  );
}

export default Quiz;