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

        <h3>💛 Why was this app created?</h3>
        <p>
          Many children, especially autistic children, learn better
          with pictures, emojis, and calm interaction.
        </p>

        <p>
          This app avoids pressure, tests, and complex text.
          It focuses on understanding, comfort, and safety.
        </p>

        <h3>🌈 Why should we use this app?</h3>
        <p>
          • It is simple and visual  
          • It reduces anxiety  
          • It supports different learning needs  
          • It helps children stay safe on the road
        </p>

        <p className="info-footer">
          Made with care for children, parents, and teachers 💙
        </p>
      </div>
    </div>
  );
}

export default Info;