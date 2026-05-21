import "./Info.css";

function Info() {
  return (
    <div className="info-page">
      <div className="info-card">
        <h1>ℹ️ About This App</h1>

        <p>
          This application was created with care to help children
          learn road safety in a calm and friendly way.
        </p>

        <h3>👨‍💻 Who created this app?</h3>
        <p>
          This app was created by Mithresh.M[CB.SC.U4CSE23039] from Amrita Vishwa Vidyapeetham,Coimbatore as part of a learning project
          to support children and parents.
        </p>

        <h3>📅 When was it created?</h3>
        <p>
          This app was developed during the academic year 2026–2027.
        </p>

        <h3>💛 A Message to Parents & Caregivers</h3>
        <p>
          Every child on the autism spectrum is a special and unique individual with their own beautiful way of seeing the world. We understand that teaching life skills, like road safety, can sometimes feel overwhelming. 
        </p>
        <p>
          Please remember: you are doing an incredible job. Your patience, love, and dedication make a world of difference. This app was created to support <strong>you</strong> just as much as it supports your child, providing a gentle, predictable, and pressure-free environment to learn together.
        </p>

        <h3>🌈 Why should we use this app?</h3>
        <p>
          • <strong>Visual First</strong>: Reduces anxiety through clear imagery and emojis.<br/>
          • <strong>Predictable</strong>: No timers, no loud sudden noises, no fail states.<br/>
          • <strong>Accessible</strong>: Text-to-Speech helps those who prefer listening over reading.<br/>
          • <strong>Real-World Practice</strong>: Our Scenario simulation helps bridge the gap to the outside world safely.
        </p>

        <p className="info-footer">
          Made with deep respect and care for children, parents, and teachers 💙
        </p>
      </div>
    </div>
  );
}

export default Info;