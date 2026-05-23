import { useState, useEffect, useCallback } from "react";
import { useApp } from "../AppContext";
import "./Quiz.css";

const questionsEN = [
  { q:"🚦 What does a RED traffic signal mean?",     correct:"STOP",         options:["STOP","GO","SLOW DOWN"] },
  { q:"🟡 What should you do at a YELLOW signal?",   correct:"SLOW DOWN",    options:["STOP","GO","SLOW DOWN"] },
  { q:"🟢 What does a GREEN signal mean?",           correct:"GO",           options:["STOP","GO","SLOW DOWN"] },
  { q:"🚸 What should you do at a zebra crossing?",  correct:"LOOK BOTH SIDES", options:["LOOK BOTH SIDES","RUN FAST","IGNORE"] },
  { q:"🛑 What does a STOP sign mean?",             correct:"STOP",         options:["STOP","GO","HORN"] },
  { q:"👮 Who helps control traffic?",              correct:"POLICE",       options:["POLICE","TEACHER","FRIEND"] },
  { q:"✋ What does a raised hand signal mean?",     correct:"STOP",         options:["STOP","GO","TURN"] },
  { q:"📵 Can we use mobile while crossing road?",   correct:"NO",           options:["YES","NO","MAYBE"] },
  { q:"🧒 Should children hold an adult's hand?",   correct:"YES",          options:["YES","NO","RUN"] },
  { q:"🚗 What should cars do near school?",        correct:"SLOW DOWN",    options:["SLOW DOWN","GO FAST","HORN"] },
  { q:"🛣️ Should we walk on the footpath?",         correct:"YES",          options:["YES","NO","ROAD"] },
  { q:"🌙 At night, should we wear bright clothes?",correct:"YES",          options:["YES","NO","DARK CLOTHES"] },
  { q:"🔊 What to do when you hear a horn?",        correct:"BE CAREFUL",   options:["BE CAREFUL","RUN","IGNORE"] },
  { q:"🚲 Should you wear a helmet on a bicycle?",  correct:"YES",          options:["YES","NO","SOMETIMES"] },
  { q:"⚠️ What does a warning sign mean?",          correct:"BE CAREFUL",   options:["STOP","GO FAST","BE CAREFUL"] },
];

const questionsTA = [
  { q:"🚦 சிவப்பு சிக்னல் என்ன அர்த்தம்?",      correct:"நிறுத்து",          options:["நிறுத்து","செல்","மெதுவாக"] },
  { q:"🟡 மஞ்சள் சிக்னலில் என்ன செய்ய வேண்டும்?", correct:"மெதுவாக செல்",    options:["நிறுத்து","செல்","மெதுவாக செல்"] },
  { q:"🟢 பச்சை சிக்னல் என்ன அர்த்தம்?",          correct:"செல்",             options:["நிறுத்து","செல்","மெதுவாக"] },
  { q:"🚸 வரிப்புலி கடவையில் என்ன செய்வது?",      correct:"இரு பக்கமும் பார்", options:["இரு பக்கமும் பார்","ஓடு","புறக்கணி"] },
  { q:"🛑 நிறுத்து அடையாளம் என்ன சொல்கிறது?",    correct:"நிறுத்து",          options:["நிறுத்து","செல்","கொம்பு"] },
  { q:"👮 போக்குவரத்தை யார் கட்டுப்படுத்துகிறார்?", correct:"காவலர்",         options:["காவலர்","ஆசிரியர்","நண்பர்"] },
  { q:"✋ உயர்த்திய கை சமிஞ்சை என்ன?",           correct:"நிறுத்து",          options:["நிறுத்து","செல்","திரும்பு"] },
  { q:"📵 சாலை கடக்கும்போது மொபைல் பயன்படுத்தலாமா?", correct:"வேண்டாம்",    options:["ஆம்","வேண்டாம்","ஒருவேளை"] },
  { q:"🧒 குழந்தைகள் பெரியவர் கை பிடிக்கணுமா?",  correct:"ஆம்",              options:["ஆம்","வேண்டாம்","ஓடு"] },
  { q:"🚗 பள்ளி அருகே வண்டிகள் என்ன செய்யணும்?",  correct:"மெதுவாக போ",      options:["மெதுவாக போ","வேகமாக போ","கொம்பு"] },
  { q:"🛣️ நடைபாதையில் நடக்கணுமா?",               correct:"ஆம்",              options:["ஆம்","வேண்டாம்","சாலை"] },
  { q:"🌙 இரவில் பிரகாசமான ஆடை அணியணுமா?",       correct:"ஆம்",              options:["ஆம்","வேண்டாம்","கருப்பு ஆடை"] },
  { q:"🔊 கொம்பு கேட்டால் என்ன செய்வது?",         correct:"கவனமாக இரு",      options:["கவனமாக இரு","ஓடு","புறக்கணி"] },
  { q:"🚲 சைக்கிளில் தலைக்கவசம் அணியணுமா?",       correct:"ஆம்",              options:["ஆம்","வேண்டாம்","சில நேரம்"] },
  { q:"⚠️ எச்சரிக்கை அடையாளம் என்ன சொல்கிறது?",  correct:"கவனமாக இரு",      options:["நிறுத்து","வேகமாக","கவனமாக இரு"] },
];

const BADGES = [
  { min:0,  max:5,  emoji:"🌱", name:"Road Learner",     nameTa:"சாலை கற்பவர்" },
  { min:6,  max:9,  emoji:"🏅", name:"Signal Expert",    nameTa:"சிக்னல் நிபுணர்" },
  { min:10, max:12, emoji:"🏆", name:"Road Safety Hero", nameTa:"சாலை பாதுகாப்பு வீரர்" },
  { min:13, max:15, emoji:"🌟", name:"Traffic Master",   nameTa:"போக்குவரத்து மாஸ்டர்" },
];

function getBadge(score) {
  return BADGES.find(b => score >= b.min && score <= b.max) || BADGES[0];
}

function updateStreak() {
  const today = new Date().toDateString();
  const last  = localStorage.getItem("lastQuizDate");
  let streak  = parseInt(localStorage.getItem("streak") || "0");
  if (last !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    streak = last === yesterday.toDateString() ? streak + 1 : 1;
    localStorage.setItem("lastQuizDate", today);
    localStorage.setItem("streak", streak);
  }
  return streak;
}

function Quiz() {
  const { t, lang } = useApp();
  const Q = t.quiz;
  const questions = lang === "en" ? questionsEN : questionsTA;

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null); // null | "correct" | "wrong"
  const [wrongAns, setWrongAns] = useState("");
  const [done, setDone] = useState(false);
  const [streak, setStreak] = useState(parseInt(localStorage.getItem("streak") || "0"));
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [quizzes, setQuizzes] = useState(() => parseInt(localStorage.getItem("quizzesCompleted") || "0"));

  const speak = useCallback((text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      // Strip non-printable characters for speech compatibility
      const cleanText = text.replace(/[^\u0020-\uFFFF]/g, " ");
      const utt = new SpeechSynthesisUtterance(cleanText);
      utt.rate = 0.88; utt.pitch = 1.1;
      window.speechSynthesis.speak(utt);
    }
  }, []);

  useEffect(() => {
    if (!done) speak(questions[idx].q);
  }, [idx, done, speak, questions]);

  const handleAnswer = (opt) => {
    if (feedback !== null) return;
    setSelectedOpt(opt);
    const correct = opt === questions[idx].correct;
    if (correct) {
      setScore(s => s + 1);
      setFeedback("correct");
      speak("Great job! You are right!");
    } else {
      setWrongAns(questions[idx].correct);
      setFeedback("wrong");
      speak("That is okay! The answer is " + questions[idx].correct);
    }
    setTimeout(() => {
      setFeedback(null);
      setSelectedOpt(null);
      setWrongAns("");
      if (idx + 1 >= questions.length) {
        const s = updateStreak();
        setStreak(s);
        const qc = quizzes + 1;
        setQuizzes(qc);
        localStorage.setItem("quizzesCompleted", qc);
        // Save best score
        const finalScore = correct ? score + 1 : score;
        const best = parseInt(localStorage.getItem("bestScore") || "0");
        if (finalScore > best) localStorage.setItem("bestScore", finalScore);
        // Award badge
        const badge = getBadge(finalScore);
        const earned = JSON.parse(localStorage.getItem("badges") || "[]");
        if (!earned.includes(badge.name)) {
          earned.push(badge.name);
          localStorage.setItem("badges", JSON.stringify(earned));
        }
        setDone(true);
      } else {
        setIdx(i => i + 1);
      }
    }, 1800);
  };

  const reset = () => { setIdx(0); setScore(0); setFeedback(null); setDone(false); setSelectedOpt(null); };

  const badge = getBadge(score);
  const pct = Math.round((idx / questions.length) * 100);
  const streakLabel = streak >= 7 ? `${streak} 🔥🔥` : streak >= 3 ? `${streak} 🔥` : `${streak}`;

  if (done) {
    return (
      <div className="quiz-page page-content">
        <div className="quiz-result card animate-popin">
          <div className="result-badge-big">{badge.emoji}</div>
          <h1 className="result-title">{Q.result_title}</h1>
          <p className="result-score">{Q.score}: <strong>{score} / {questions.length}</strong></p>
          <div className="result-badge-label">
            {Q.badges_title} <span className="badge-pill badge-yellow">{badge.emoji} {lang === "en" ? badge.name : badge.nameTa}</span>
          </div>
          <div className="result-streak">
            {Q.streak}: <strong>{streakLabel}</strong>
          </div>
          <button className="btn btn-primary" onClick={reset}>{Q.retry}</button>
        </div>
      </div>
    );
  }

  const curr = questions[idx];

  return (
    <div className="quiz-page page-content">
      <div className="quiz-header animate-fadeup">
        <h1>{Q.title}</h1>
        <div className="quiz-meta">
          <span className="badge-pill badge-blue">{Q.score}: {score}</span>
          <span className="badge-pill badge-yellow">{Q.streak}: {streakLabel}</span>
          <span className="badge-pill badge-green">{Q.progress} {idx + 1}/{questions.length}</span>
        </div>
      </div>

      <div className="progress-bar-wrap animate-fadeup">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="question-card card animate-fadeup">
        <div className="question-top">
          <h2 className="question-text">{curr.q}</h2>
          <button className="btn-icon" onClick={() => speak(curr.q + ". Options: " + curr.options.join(", "))} aria-label="Read question">
            🔊
          </button>
        </div>

        <div className="options-grid">
          {curr.options.map(opt => (
            <button
              key={opt}
              className={`option-btn
                ${selectedOpt === opt && feedback === "correct" ? "opt-correct" : ""}
                ${selectedOpt === opt && feedback === "wrong"   ? "opt-wrong"   : ""}
              `}
              onClick={() => handleAnswer(opt)}
              disabled={feedback !== null}
            >
              {opt}
            </button>
          ))}
        </div>

        {feedback === "correct" && (
          <div className="feedback-correct">{Q.correct}</div>
        )}
        {feedback === "wrong" && (
          <div className="feedback-wrong">{Q.wrong} <strong>{wrongAns}</strong></div>
        )}
      </div>
    </div>
  );
}

export default Quiz;