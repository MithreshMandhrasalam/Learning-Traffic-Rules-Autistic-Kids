import { useEffect, useState } from "react";
import { useApp } from "../AppContext";
import "./ParentDashboard.css";

function ParentDashboard() {
  const { t } = useApp();
  const P = t.parent;

  const [data, setData] = useState(null);
  const [reset, setReset] = useState(false);

  const loadData = () => {
    const lessons   = parseInt(localStorage.getItem("lessonsCompleted") || "0");
    const quizzes   = parseInt(localStorage.getItem("quizzesCompleted") || "0");
    const best      = parseInt(localStorage.getItem("bestScore") || "0");
    const streak    = parseInt(localStorage.getItem("streak") || "0");
    const badges    = JSON.parse(localStorage.getItem("badges") || "[]");
    const lastDate  = localStorage.getItem("lastQuizDate") || null;
    setData({ lessons, quizzes, best, streak, badges, lastDate });
  };

  useEffect(() => { loadData(); }, []);

  const handleReset = () => {
    if (!window.confirm(P.reset_confirm)) return;
    ["lessonsCompleted","quizzesCompleted","bestScore","streak","badges","lastQuizDate","learned","lastActive"].forEach(
      k => localStorage.removeItem(k)
    );
    setReset(true);
    loadData();
  };

  const stats = data
    ? [
        { icon: "📘", label: P.lessons,  value: data.lessons,           color: "blue"   },
        { icon: "📝", label: P.quizzes,  value: data.quizzes,           color: "purple" },
        { icon: "🏆", label: P.score,    value: `${data.best} / 15`,    color: "yellow" },
        { icon: "🔥", label: P.streak,   value: `${data.streak} days`,  color: "orange" },
        { icon: "🏅", label: P.badges,   value: data.badges.length,     color: "green"  },
        { icon: "📅", label: P.last,     value: data.lastDate || "—",   color: "teal"   },
      ]
    : [];

  return (
    <div className="parent-page page-content">
      <div className="parent-header animate-fadeup">
        <h1>{P.title}</h1>
        <p>{P.subtitle}</p>
      </div>

      {/* Stats Grid */}
      <div className="parent-stats-grid animate-fadeup">
        {stats.map((s, i) => (
          <div key={i} className={`stat-card stat-${s.color}`} style={{ animationDelay: `${i * 0.06}s` }}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      {data && data.badges.length > 0 && (
        <div className="parent-section card animate-fadeup">
          <h3>🏅 {P.badges}</h3>
          <div className="badge-row">
            {data.badges.map((b, i) => (
              <span key={i} className="badge-pill badge-yellow">{b}</span>
            ))}
          </div>
        </div>
      )}

      {data && data.lessons === 0 && data.quizzes === 0 && (
        <div className="parent-empty card animate-fadeup">
          <p>📭 {P.no_data}</p>
        </div>
      )}

      {/* Tips */}
      <div className="parent-section card animate-fadeup">
        <h3>{P.tips_title}</h3>
        <ul className="tips-list">
          {P.tips.map((tip, i) => (
            <li key={i} className="tip-item">
              <span className="tip-bullet">💡</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reset */}
      <div className="parent-reset-row animate-fadeup">
        <button className="btn btn-soft reset-btn" onClick={handleReset}>
          🗑️ {P.reset}
        </button>
        {reset && <span className="reset-msg">✅ Progress reset!</span>}
      </div>
    </div>
  );
}

export default ParentDashboard;
