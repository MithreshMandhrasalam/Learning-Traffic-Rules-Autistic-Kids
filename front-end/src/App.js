import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Profile from "./pages/Profile";
import Info from "./pages/Info";
import Scenario from "./pages/Scenario";
import Achievements from "./pages/Achievements";
import ParentDashboard from "./pages/ParentDashboard";
import Story from "./pages/Story";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/learn"        element={<Learn />} />
          <Route path="/scenario"     element={<Scenario />} />
          <Route path="/quiz"         element={<Quiz />} />
          <Route path="/profile"      element={<Profile />} />
          <Route path="/info"         element={<Info />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/parent"       element={<ParentDashboard />} />
          <Route path="/story"        element={<Story />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;