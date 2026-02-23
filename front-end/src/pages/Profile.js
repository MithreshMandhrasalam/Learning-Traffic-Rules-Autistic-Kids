import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [mood, setMood] = useState("");
  const [likes, setLikes] = useState([]);
  const [color, setColor] = useState("");
  const [energy, setEnergy] = useState(2);
  const [place, setPlace] = useState("");
  const [sound, setSound] = useState("");
  const [saved, setSaved] = useState(false);

  const toggle = (value, state, setState) => {
    setState(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1 className="profile-title">🌈 My Learning Space</h1>
        <p className="profile-subtitle">
          You can scroll down 💛 Take your time
        </p>

        {/* Q1 */}
        <section>
          <h3>How do you feel now?</h3>
          <div className="card-row">
            {["😊", "🙂", "😐", "😴", "😟"].map((e) => (
              <div
                key={e}
                className={`emoji-card ${mood === e ? "active" : ""}`}
                onClick={() => setMood(e)}
              >
                {e}
              </div>
            ))}
          </div>
        </section>

        {/* Q2 */}
        <section>
          <h3>What helps you learn?</h3>
          <div className="card-row">
            {["🖼️", "🎨", "🎵", "🧸"].map((e) => (
              <div
                key={e}
                className={`emoji-card ${
                  likes.includes(e) ? "active" : ""
                }`}
                onClick={() => toggle(e, likes, setLikes)}
              >
                {e}
              </div>
            ))}
          </div>
        </section>

        {/* Q3 */}
        <section>
          <h3>Which color feels nice?</h3>
          <div className="card-row">
            {["🟥", "🟨", "🟩", "🟦", "🟪"].map((e) => (
              <div
                key={e}
                className={`emoji-card ${color === e ? "active" : ""}`}
                onClick={() => setColor(e)}
              >
                {e}
              </div>
            ))}
          </div>
        </section>

        {/* Q4 – SLIDER */}
        <section>
          <h3>How much energy do you have?</h3>
          <div className="slider-box">
            <span>🐢</span>
            <input
              type="range"
              min="1"
              max="5"
              value={energy}
              onChange={(e) => setEnergy(e.target.value)}
            />
            <span>⚡</span>
          </div>
        </section>

        {/* Q5 – DROPDOWN */}
        <section>
          <h3>Where do you like to learn?</h3>
          <select
            className="emoji-select"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          >
            <option value="">👇</option>
            <option value="🏠">🏠</option>
            <option value="🏫">🏫</option>
            <option value="🌳">🌳</option>
            <option value="🛏️">🛏️</option>
          </select>
        </section>

        {/* Q6 – DROPDOWN */}
        <section>
          <h3>Which sound is okay?</h3>
          <select
            className="emoji-select"
            value={sound}
            onChange={(e) => setSound(e.target.value)}
          >
            <option value="">👇</option>
            <option value="🔇">🔇</option>
            <option value="🎵">🎵</option>
            <option value="👂">👂</option>
          </select>
        </section>

        {/* Q7 – EXPRESSION */}
        <section>
          <h3>Show how learning feels</h3>
          <textarea
            className="emoji-textarea"
            placeholder="😊 ⭐ 🌈"
          />
        </section>

        <button className="save-btn" onClick={() => setSaved(true)}>
          ⭐ Save
        </button>

        {saved && (
          <p className="done-msg">
            💛 You did great. Thank you.
          </p>
        )}
      </div>
    </div>
  );
}

export default Profile;