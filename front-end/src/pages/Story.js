import { useState, useEffect, useCallback } from "react";
import { useApp } from "../AppContext";
import "./Story.css";

const storyPages = [
  {
    emoji: "🌅",
    scene: "Morning",
    sceneTa: "காலை",
    text: "Good morning! Rahul wakes up early today. He is going to school with his mother.",
    textTa: "காலை வணக்கம்! ரகுல் இன்று சீக்கிரம் எழுந்தான். அவன் அம்மாவோடு பள்ளிக்கு செல்கிறான்.",
    bg: "#fff8e1",
    bgCalm: "#f0fdf4",
  },
  {
    emoji: "🚶‍♂️",
    scene: "Walking to School",
    sceneTa: "பள்ளிக்கு நடக்கிறான்",
    text: "Rahul and his mother walk on the footpath. Always use the footpath — never walk on the road!",
    textTa: "ரகுலும் அவன் அம்மாவும் நடைபாதையில் நடக்கிறார்கள். எப்போதும் நடைபாதையை பயன்படுத்துங்கள் — சாலையில் நடக்காதீர்கள்!",
    bg: "#e8f5e9",
    bgCalm: "#ecfdf5",
  },
  {
    emoji: "🔴",
    scene: "Red Light!",
    sceneTa: "சிவப்பு விளக்கு!",
    text: "They reach the traffic light. It shows RED. Rahul stops and waits. 🛑 Red means STOP.",
    textTa: "அவர்கள் ட்ராஃபிக் லைட் வருகிறார்கள். அது சிவப்பு காட்டுகிறது. ரகுல் நிறுத்தி காத்திருக்கிறான். 🛑 சிவப்பு = நிறுத்து.",
    bg: "#ffebee",
    bgCalm: "#fef2f2",
  },
  {
    emoji: "🟡",
    scene: "Yellow Light!",
    sceneTa: "மஞ்சள் விளக்கு!",
    text: "Now it shows YELLOW. Rahul gets ready. He holds his mother's hand tightly. 🤝 Always hold hands!",
    textTa: "இப்போது மஞ்சள் காட்டுகிறது. ரகுல் தயாரகிறான். அம்மா கையை இறுக்கமாக பிடிக்கிறான். 🤝 எப்போதும் கை பிடிக்கவும்!",
    bg: "#fff9c4",
    bgCalm: "#fefce8",
  },
  {
    emoji: "🟢",
    scene: "Green Light — GO!",
    sceneTa: "பச்சை விளக்கு — செல்லுங்கள்!",
    text: "GREEN! Rahul looks left, then right. The road is clear. He walks slowly on the zebra crossing. 🚸",
    textTa: "பச்சை! ரகுல் இடது பக்கம் பார்க்கிறான், பிறகு வலது பக்கம். சாலை தெளிவாக இருக்கிறது. வரிப்புலி கடவையில் மெதுவாக நடக்கிறான். 🚸",
    bg: "#e8f5e9",
    bgCalm: "#f0fdf4",
  },
  {
    emoji: "👮",
    scene: "Police Officer",
    sceneTa: "காவலர்",
    text: "A police officer is helping near the crossing. Rahul smiles and follows their signal. 👮 Always follow the police!",
    textTa: "ஒரு காவலர் கடவை அருகில் உதவுகிறார். ரகுல் சிரித்து அவர் சமிஞ்சையை பின்பற்றுகிறான். 👮 எப்போதும் காவலரை பின்பற்றுங்கள்!",
    bg: "#e3f2fd",
    bgCalm: "#eff6ff",
  },
  {
    emoji: "🎉",
    scene: "Safe at School!",
    sceneTa: "பள்ளியில் பாதுகாப்பாக!",
    text: "Rahul reaches school safely! He followed all the road rules. Great job, Rahul! 🌟 You are a Road Safety Hero!",
    textTa: "ரகுல் பாதுகாப்பாக பள்ளி வந்தான்! அவன் அனைத்து சாலை விதிகளையும் பின்பற்றினான். மிகவும் நன்று, ரகுல்! 🌟 நீ ஒரு சாலை பாதுகாப்பு வீரன்!",
    bg: "#fce4ec",
    bgCalm: "#fdf4ff",
  },
];

function Story() {
  const { t, lang } = useApp();
  const S = t.story;
  const [page, setPage] = useState(0);

  const current = storyPages[page];
  const isLast = page === storyPages.length - 1;
  const isFirst = page === 0;

  const speak = useCallback(
    (text) => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.rate = 0.85;
        utt.pitch = 1.1;
        window.speechSynthesis.speak(utt);
      }
    },
    []
  );

  useEffect(() => {
    const text =
      lang === "en"
        ? `${current.scene}. ${current.text}`
        : `${current.sceneTa}. ${current.textTa}`;
    speak(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleListen = () => {
    const text =
      lang === "en"
        ? `${current.scene}. ${current.text}`
        : `${current.sceneTa}. ${current.textTa}`;
    speak(text);
  };

  return (
    <div className="story-page page-content">
      <div className="story-header animate-fadeup">
        <h1>{S.title}</h1>
        <p>{S.subtitle}</p>
        {/* Page dots */}
        <div className="story-dots">
          {storyPages.map((_, i) => (
            <button
              key={i}
              className={`story-dot ${i === page ? "active" : ""}`}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className="story-card card animate-popin"
        style={{ background: current.bg }}
        key={page}
      >
        <div className="story-scene-label">
          {lang === "en" ? current.scene : current.sceneTa}
        </div>
        <div className="story-emoji animate-float">{current.emoji}</div>
        <p className="story-text">
          {lang === "en" ? current.text : current.textTa}
        </p>
        <button className="btn btn-soft listen-btn" onClick={handleListen}>
          🔊 {S.listen}
        </button>
      </div>

      <div className="story-nav animate-fadeup">
        <button
          className="btn btn-soft"
          onClick={() => setPage((p) => p - 1)}
          disabled={isFirst}
        >
          {S.prev}
        </button>

        <span className="story-page-count">
          {page + 1} / {storyPages.length}
        </span>

        {isLast ? (
          <button className="btn btn-primary" onClick={() => setPage(0)}>
            {S.replay}
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => setPage((p) => p + 1)}
          >
            {S.next}
          </button>
        )}
      </div>

      {isLast && (
        <div className="story-end animate-popin">
          <div className="story-end-badge">🌟</div>
          <p>{S.finish}</p>
        </div>
      )}
    </div>
  );
}

export default Story;
