# 🚦 Learning Traffic Rules for Autistic Kids

> An interactive, accessible web application designed to help children on the autism spectrum learn road safety and traffic rules through visual storytelling, gamified quizzes, and structured learning modules.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Pages Overview](#pages-overview)
- [Design Philosophy](#design-philosophy)
- [Accessibility Considerations](#accessibility-considerations)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About the Project

Children with Autism Spectrum Disorder (ASD) often face unique challenges when learning abstract concepts like traffic rules. This application bridges that gap by offering:

- **Visual-first learning** using icons, colors, and imagery
- **Structured, predictable interfaces** that reduce cognitive overload
- **Gamified quizzes** with positive reinforcement
- **Child-friendly language** throughout all content

This project was built with empathy at its core — every design and feature decision was made with the end user (a child with autism) in mind.

---

## ✨ Key Features

- 🟢 **Interactive Learn Module** — Browse traffic signs with simple, clear explanations
- 🚦 **Scenario Simulation** — Step-by-step visual practice of crossing the road
- 🔊 **Text-to-Speech (TTS)** — Audio playback of rules and questions to assist reading
- 🧠 **Quiz Mode** — Test understanding with multiple-choice questions and instant feedback
- 👤 **User Profile** — Track learning progress and earned badges
- ℹ️ **Info Page** — Safety tips and guidance for parents and caregivers
- 🔁 **Persistent Navigation** — Always-visible navbar for easy page switching
- 📱 **Responsive Design** — Works on tablets and desktops

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.3 | UI Framework |
| React Router DOM | ^7.12.0 | Client-side routing |
| React Scripts | 5.0.1 | Build tooling (CRA) |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | LTS | Runtime environment |
| Express | ^5.2.1 | REST API server |
| Mongoose | ^9.1.3 | MongoDB ODM |
| CORS | ^2.8.5 | Cross-origin support |

### Database
| Technology | Purpose |
|------------|---------|
| MongoDB | Storing traffic rule data, quiz questions, and user profiles |

---

## 📁 Project Structure

```
Learning-Traffic-Rules-Autistic-Kids/
├── front-end/                  # React application
│   ├── public/                 # Static assets
│   └── src/
│       ├── components/
│       │   ├── Navbar.js       # Global navigation bar
│       │   └── Navbar.css
│       ├── pages/
│       │   ├── Home.js         # Landing / welcome page
│       │   ├── Learn.js        # Traffic sign learning module
│       │   ├── Quiz.js         # Interactive quiz
│       │   ├── Profile.js      # User progress & badges
│       │   ├── Info.js         # Informational resources
│       │   └── SafetyProfile.js
│       ├── App.js              # Root component + routing
│       ├── styles.css          # Global styles
│       └── index.js            # Entry point
│
└── back-end/                   # Node.js + Express API
    ├── config/
    │   └── db.js               # MongoDB connection setup
    ├── models/                 # Mongoose data models
    ├── routes/
    │   └── trafficRoutes.js    # API endpoints
    └── server.js               # Express server entry point
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port `27017`)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MithreshMandhrasalam/Learning-Traffic-Rules-Autistic-Kids.git
   cd Learning-Traffic-Rules-Autistic-Kids
   ```

2. **Install backend dependencies**
   ```bash
   cd back-end
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../front-end
   npm install
   ```

---

## ▶️ Running the App

### Step 1 — Start MongoDB

Make sure your local MongoDB instance is running:
```bash
mongod
```

### Step 2 — Start the Backend Server

```bash
cd back-end
npm start
```
> API will be available at `http://localhost:5000`

### Step 3 — Start the React Frontend

```bash
cd front-end
npm start
```
> App will open at `http://localhost:3000`

---

## 📄 Pages Overview

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Welcome screen with navigation guidance |
| `/learn` | Learn | Visual traffic sign library with explanations |
| `/scenario`| Scenario | Interactive real-world crossing simulation |
| `/quiz` | Quiz | Multiple-choice questions with scoring |
| `/profile` | Profile | User progress, history, and earned rewards |
| `/info` | Info | Resources for parents, teachers, and caregivers |

---

## 🎨 Design Philosophy

This application follows **autism-friendly UX principles**:

1. **Consistency** — The layout and navigation never change unexpectedly
2. **Simplicity** — Minimal text, maximum visual cues
3. **Color Contrast** — High-contrast design helps with visual processing
4. **Positive Reinforcement** — Quiz feedback always encourages the learner
5. **No Sensory Overload** — Animations are subtle and non-distracting

---

## ♿ Accessibility Considerations

- All interactive elements are keyboard-navigable
- Images include descriptive `alt` text for screen reader compatibility
- Font sizes are large and legible for young readers
- Color is never the sole indicator of state or meaning
- Buttons and clickable areas have sufficient touch targets (≥ 44px)

---

## 🔮 Future Enhancements

- [ ] 🌍 Multi-language support (Tamil, Hindi, and more)
- [ ] 🏅 Animated reward system with badges and certificates
- [ ] 📊 Parent/Caregiver dashboard to monitor progress
- [ ] 🔐 User authentication and cloud-synced profiles
- [ ] 📲 Progressive Web App (PWA) support for offline use
- [ ] 🤖 AI-generated adaptive quiz difficulty

---

## 🤝 Contributing

Contributions, ideas, and feedback are warmly welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add: your feature description'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code follows the existing style and all pages are tested before submitting a PR.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <strong>Built with ❤️ for kids who see the world differently.</strong><br/>
  Making roads safer, one lesson at a time. 🚦
</div>
