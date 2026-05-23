import { useState, useEffect } from "react";
import { useApp } from "../AppContext";
import "./Achievements.css";

const ALL_BADGES = [
  {
    id: "road_learner",
    emoji: "🌱",
    name: "Road Learner",
    nameTa: "சாலை கற்பவர்",
    desc: "Completed your first quiz",
    descTa: "முதல் வினாடிவினா முடித்தீர்கள்",
    condition: "Score 0–5 in a quiz",
  },
  {
    id: "signal_expert",
    emoji: "🏅",
    name: "Signal Expert",
    nameTa: "சிக்னல் நிபுணர்",
    desc: "Scored 6–9 in a quiz",
    descTa: "வினாடிவினாவில் 6–9 பெற்றீர்கள்",
    condition: "Score 6–9 in a quiz",
  },
  {
    id: "road_safety_hero",
    emoji: "🏆",
    name: "Road Safety Hero",
    nameTa: "சாலை பாதுகாப்பு வீரர்",
    desc: "Scored 10–12 in a quiz",
    descTa: "வினாடிவினாவில் 10–12 பெற்றீர்கள்",
    condition: "Score 10–12 in a quiz",
  },
  {
    id: "traffic_master",
    emoji: "🌟",
    name: "Traffic Master",
    nameTa: "போக்குவரத்து மாஸ்டர்",
    desc: "Scored 13–15 in a quiz",
    descTa: "வினாடிவினாவில் 13–15 பெற்றீர்கள்",
    condition: "Score 13–15 in a quiz",
  },
  {
    id: "lesson_starter",
    emoji: "📘",
    name: "Lesson Starter",
    nameTa: "பாட தொடக்கம்",
    desc: "Learned 5 signs",
    descTa: "5 அடையாளங்கள் கற்றீர்கள்",
    condition: "Mark 5 signs as learned",
  },
  {
    id: "super_learner",
    emoji: "🎓",
    name: "Super Learner",
    nameTa: "சூப்பர் கற்பவர்",
    desc: "Learned all 20 signs",
    descTa: "அனைத்து 20 அடையாளங்களும் கற்றீர்கள்",
    condition: "Mark all 20 signs as learned",
  },
  {
    id: "streak_3",
    emoji: "🔥",
    name: "3-Day Streak",
    nameTa: "3-நாள் தொடர்",
    desc: "Completed quizzes 3 days in a row",
    descTa: "3 நாட்கள் தொடர்ந்து வினாடிவினா முடித்தீர்கள்",
    condition: "3-day quiz streak",
  },
  {
    id: "streak_7",
    emoji: "🔥🔥",
    name: "Week Champion",
    nameTa: "வார சாம்பியன்",
    desc: "7-day quiz streak!",
    descTa: "7 நாட்கள் தொடர்ந்து வினாடிவினா முடித்தீர்கள்!",
    condition: "7-day quiz streak",
  },
];

function Achievements() {
  const { t, lang } = useApp();
  const A = t.achievements;

  const [earned, setEarned] = useState([]);

  useEffect(() => {
    // Load earned badges from localStorage + compute dynamic ones
    const storedBadges = JSON.parse(localStorage.getItem("badges") || "[]");
    const streak = parseInt(localStorage.getItem("streak") || "0");
    const lessonsCompleted = parseInt(localStorage.getItem("lessonsCompleted") || "0");

    const dynamic = [...storedBadges];

    if (lessonsCompleted >= 5 && !dynamic.includes("Lesson Starter")) dynamic.push("Lesson Starter");
    if (lessonsCompleted >= 20 && !dynamic.includes("Super Learner")) dynamic.push("Super Learner");
    if (streak >= 3 && !dynamic.includes("3-Day Streak")) dynamic.push("3-Day Streak");
    if (streak >= 7 && !dynamic.includes("Week Champion")) dynamic.push("Week Champion");

    setEarned(dynamic);
  }, []);


  const earnedCount = ALL_BADGES.filter(
    (b) => earned.includes(b.name) || earned.includes(b.nameTa)
  ).length;

  return (
    <div className="achievements-page page-content">
      <div className="ach-header animate-fadeup">
        <h1>{A.title}</h1>
        <p>{A.subtitle}</p>
        <div className="ach-progress-row">
          <span className="badge-pill badge-blue">
            🏅 {earnedCount} / {ALL_BADGES.length}
          </span>
        </div>
      </div>

      <div className="ach-grid animate-fadeup">
        {ALL_BADGES.map((b, i) => {
          const isEarned = earned.includes(b.name) || earned.includes(b.nameTa);
          return (
            <div
              key={b.id}
              className={`ach-card ${isEarned ? "earned" : "locked"} animate-fadeup`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="ach-emoji">{isEarned ? b.emoji : "🔒"}</div>
              <div className="ach-name">
                {lang === "en" ? b.name : b.nameTa}
              </div>
              <div className="ach-desc">
                {isEarned
                  ? lang === "en" ? b.desc : b.descTa
                  : A.locked}
              </div>
              {isEarned && (
                <div className="ach-unlocked-label">{A.unlocked} ✅</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Achievements;
