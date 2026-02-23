import { useState } from "react";
import "./SafetyProfile.css";

function SafetyProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [walk, setWalk] = useState("");
  const [cycle, setCycle] = useState("");
  const [helper, setHelper] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("⭐ Profile saved! You are learning safely 😊");
  };

  return (
    <div className="profile-page">
      <h1>🌟 My Road Safety Profile 🌟</h1>
      <p className="profile-subtitle">
        Tell us about you so we can help you stay safe 🚸
      </p>

      <form className="profile-form" onSubmit={handleSubmit}>
        
        {/* SECTION 1 */}
        <div className="section-card">
          <h2>👦 About Me</h2>

          <label>Child Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>🎂 Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* SECTION 2 */}
        <div className="section-card">
          <h2>🚦 Road Safety Habits</h2>

          <label>🚶 Do you walk to school?</label>
          <select value={walk} onChange={(e) => setWalk(e.target.value)}>
            <option value="">Choose</option>
            <option value="yes">Yes 😊</option>
            <option value="no">No 🙂</option>
          </select>

          <label>🚲 Do you use a bicycle?</label>
          <select value={cycle} onChange={(e) => setCycle(e.target.value)}>
            <option value="">Choose</option>
            <option value="yes">Yes 🚲</option>
            <option value="no">No 🚶</option>
          </select>
        </div>

        {/* SECTION 3 */}
        <div className="section-card">
          <h2>🧑‍🏫 Who Helps Me?</h2>

          <label>Who helps you cross the road?</label>
          <select value={helper} onChange={(e) => setHelper(e.target.value)}>
            <option value="">Choose</option>
            <option value="parent">Parent 👨‍👩‍👦</option>
            <option value="teacher">Teacher 👩‍🏫</option>
            <option value="police">Traffic Police 👮</option>
          </select>
        </div>

        {/* SUBMIT */}
        <button type="submit" className="save-btn">
          Save My Profile ✅
        </button>
      </form>

      {message && <p className="success-msg">{message}</p>}
    </div>
  );
}

export default SafetyProfile;