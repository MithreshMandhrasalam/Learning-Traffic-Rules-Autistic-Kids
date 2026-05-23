import { useState } from "react";
import { useApp } from "../AppContext";
import "./Learn.css";

const allSigns = [
  { id:1,  category:"Lights",    emoji:"🔴", name:"Red Light",          nameTa:"சிவப்பு விளக்கு",  meaning:"STOP — Do not move",                              meaningTa:"நிறுத்து — நகர வேண்டாம்" },
  { id:2,  category:"Lights",    emoji:"🟡", name:"Yellow Light",       nameTa:"மஞ்சள் விளக்கு",   meaning:"SLOW DOWN — Get ready",                           meaningTa:"மெதுவாக — தயாராகுங்கள்" },
  { id:3,  category:"Lights",    emoji:"🟢", name:"Green Light",        nameTa:"பச்சை விளக்கு",    meaning:"GO — You can walk safely",                        meaningTa:"செல்லுங்கள் — பாதுகாப்பாக நடக்கலாம்" },
  { id:4,  category:"Signs",     emoji:"🛑", name:"Stop Sign",          nameTa:"நிறுத்து அடையாளம்", meaning:"STOP — Wait before proceeding",                   meaningTa:"நிறுத்து — முன்செல்ல காத்திருங்கள்" },
  { id:5,  category:"Signs",     emoji:"🚸", name:"Zebra Crossing",     nameTa:"வரிப்புலி கடக்கும் இடம்", meaning:"Look both sides, then cross",                   meaningTa:"இரு பக்கமும் பார்க்கவும், பிறகு கடக்கவும்" },
  { id:6,  category:"Signs",     emoji:"🏫", name:"School Zone",        nameTa:"பள்ளி மண்டலம்",    meaning:"Drive SLOW — Children nearby",                    meaningTa:"மெதுவாக ஓட்டு — குழந்தைகள் அருகில் உள்ளனர்" },
  { id:7,  category:"Signs",     emoji:"⛽", name:"Petrol Station",     nameTa:"பெட்ரோல் நிலையம்", meaning:"Fuel available here",                             meaningTa:"இங்கே எரிபொருள் கிடைக்கும்" },
  { id:8,  category:"Signs",     emoji:"🔁", name:"Roundabout",         nameTa:"சுற்று வழி",       meaning:"Go around the circle",                           meaningTa:"வட்டத்தை சுற்றி செல்லுங்கள்" },
  { id:9,  category:"Signs",     emoji:"⚠️", name:"Danger Ahead",      nameTa:"ஆபத்து முன்னால்",  meaning:"Be careful — hazard ahead",                      meaningTa:"கவனமாக இருங்கள் — ஆபத்து முன்னால்" },
  { id:10, category:"Behaviour", emoji:"🤝", name:"Hold Hands",         nameTa:"கை பிடிக்கவும்",   meaning:"Hold an adult's hand when crossing",              meaningTa:"கடக்கும்போது பெரியவர் கை பிடிக்கவும்" },
  { id:11, category:"Behaviour", emoji:"👮", name:"Follow Police",      nameTa:"காவலரை பின்பற்றவும்", meaning:"Follow police instructions",                    meaningTa:"காவலர் அறிவுறுத்தலை பின்பற்றவும்" },
  { id:12, category:"Behaviour", emoji:"🚶", name:"Walk on Footpath",   nameTa:"நடைபாதையில் நடக்கவும்", meaning:"Always use the footpath",                    meaningTa:"எப்போதும் நடைபாதையை பயன்படுத்தவும்" },
  { id:13, category:"Behaviour", emoji:"📵", name:"No Mobile on Road", nameTa:"சாலையில் மொபைல் வேண்டாம்", meaning:"Never use phone while crossing",             meaningTa:"கடக்கும்போது ஒருபோதும் தொலைபேசி பயன்படுத்த வேண்டாம்" },
  { id:14, category:"Behaviour", emoji:"🚲", name:"Bicycle Safety",     nameTa:"சைக்கிள் பாதுகாப்பு", meaning:"Ride slowly and wear helmet",                   meaningTa:"மெதுவாக சவாரி செய்யுங்கள், தலைக்கவசம் அணியுங்கள்" },
  { id:15, category:"Behaviour", emoji:"✋", name:"Hand Signal STOP",   nameTa:"கை சமிஞ்சை நிறுத்து", meaning:"Stop — hand raised means wait",                  meaningTa:"நிறுத்து — கை உயர்த்தப்பட்டால் காத்திருங்கள்" },
  { id:16, category:"Night",     emoji:"🌙", name:"Night Walking",      nameTa:"இரவு நடக்கும்",    meaning:"Wear bright clothes at night",                    meaningTa:"இரவில் பிரகாசமான ஆடை அணியுங்கள்" },
  { id:17, category:"Night",     emoji:"🔦", name:"Use a Torch",        nameTa:"கைவிளக்கு பயன்படுத்தவும்", meaning:"Carry a torch in the dark",                  meaningTa:"இருளில் கைவிளக்கை எடுத்துச் செல்லுங்கள்" },
  { id:18, category:"Night",     emoji:"🚗", name:"Car Headlights",     nameTa:"கார் முன் விளக்குகள்", meaning:"Stay away from bright headlights",               meaningTa:"பிரகாசமான முன் விளக்குகளிலிருந்து விலகி இருங்கள்" },
  { id:19, category:"Behaviour", emoji:"🔊", name:"Hear a Horn",        nameTa:"கொம்பு கேட்டால்",  meaning:"Step aside and be careful",                      meaningTa:"ஒதுங்கி கவனமாக இருங்கள்" },
  { id:20, category:"Signs",     emoji:"🚫", name:"No Entry",           nameTa:"நுழைவு தடை",       meaning:"Do not enter this road",                         meaningTa:"இந்த சாலையில் நுழையாதீர்கள்" },
];

function Learn() {
  const { t, lang } = useApp();
  const L = t.learn;
  const categories = ["All", "Lights", "Signs", "Behaviour", "Night"];
  const catLabels = L.categories;

  const [cat, setCat] = useState("All");
  const [learned, setLearned] = useState(() => {
    try { return JSON.parse(localStorage.getItem("learned") || "[]"); }
    catch { return []; }
  });
  const [active, setActive] = useState(null);

  const filtered = cat === "All" ? allSigns : allSigns.filter(s => s.category === cat);

  const toggleLearned = (id, e) => {
    e.stopPropagation();
    setLearned(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem("learned", JSON.stringify(next));
      // update lessonsCompleted count
      localStorage.setItem("lessonsCompleted", next.length);
      return next;
    });
  };

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.rate = 0.88; utt.pitch = 1.1;
      window.speechSynthesis.speak(utt);
    }
  };

  const handleCardClick = (sign) => {
    setActive(sign.id === active ? null : sign.id);
    const name = lang === "en" ? sign.name : sign.nameTa;
    const meaning = lang === "en" ? sign.meaning : sign.meaningTa;
    speak(`${name}. ${meaning}`);
  };

  const pct = Math.round((learned.length / allSigns.length) * 100);

  return (
    <div className="learn-page page-content">
      <div className="learn-header animate-fadeup">
        <h1>{L.title}</h1>
        <p>{L.subtitle}</p>
      </div>

      {/* Progress */}
      <div className="learn-progress animate-fadeup">
        <div className="lp-label">
          <span>🌟 {learned.length} / {allSigns.length} {L.progress}</span>
          <span>{pct}%</span>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="learn-tabs animate-fadeup">
        {categories.map((c, i) => (
          <button
            key={c}
            className={`tab-btn ${cat === c ? "active" : ""}`}
            onClick={() => setCat(c)}
          >
            {catLabels[i]}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="signs-grid">
        {filtered.map((sign, i) => {
          const isLearned = learned.includes(sign.id);
          const isActive = active === sign.id;
          const name = lang === "en" ? sign.name : sign.nameTa;
          const meaning = lang === "en" ? sign.meaning : sign.meaningTa;
          return (
            <div
              key={sign.id}
              className={`sign-card ${isLearned ? "learned" : ""} ${isActive ? "expanded" : ""} animate-fadeup`}
              style={{ animationDelay: `${i * 0.04}s` }}
              onClick={() => handleCardClick(sign)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && handleCardClick(sign)}
            >
              <div className="sign-emoji">{sign.emoji}</div>
              <div className="sign-name">{name}</div>
              {isActive && (
                <div className="sign-meaning animate-popin">
                  <span className="meaning-label">Meaning:</span>
                  <span>{meaning}</span>
                </div>
              )}
              <div className="sign-actions" onClick={e => e.stopPropagation()}>
                <button
                  className="btn-icon"
                  onClick={e => { e.stopPropagation(); speak(`${name}. ${meaning}`); }}
                  title={L.listen}
                  aria-label="Read aloud"
                >
                  🔊
                </button>
                <button
                  className={`btn-icon ${isLearned ? "learned-btn" : ""}`}
                  onClick={e => toggleLearned(sign.id, e)}
                  title={L.mark}
                  aria-label={isLearned ? "Unmark" : "Mark as learned"}
                >
                  {isLearned ? "✅" : "☐"}
                </button>
              </div>
              {isLearned && <div className="learned-badge">{L.learned}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Learn;