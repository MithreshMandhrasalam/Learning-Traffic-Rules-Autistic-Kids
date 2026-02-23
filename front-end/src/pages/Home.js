import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-message-card">
        <div className="home-icons">🚦😊</div>

        <h1 className="home-title">
          A Safe Place to Learn Road Safety
        </h1>

        <p className="home-text">
          This app is made with care for children who learn differently 💛
        </p>

        <p className="home-text">
          Here, learning is calm, slow, and gentle.
          There is no rush. There is no pressure.
        </p>

        <p className="home-text">
          We use simple pictures, soft colors, and kind words
          to help children understand how to stay safe on the road.
        </p>

        <p className="home-text highlight">
          Every child learns at their own pace 🌱  
          And that is perfectly okay.
        </p>

        <div className="home-footer">
          Made with love for children, parents, and teachers 💖
        </div>
      </div>
    </div>
  );
}

export default Home;