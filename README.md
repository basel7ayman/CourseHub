# CourseHub

CourseHub is a **gamified learning platform** that helps students discover and follow personalized course tracks more efficiently.  
It combines a **React frontend**, **Node.js backend**, and **MongoDB** database with engagement features like **streaks** and **leaderboards** to keep learners motivated.

---

## ✨ Key Outcomes

- **35% faster onboarding** with a gamified, track‑based course selection flow.
- **40% better study efficiency** using a simple machine learning–driven recommendation engine.
- **Higher engagement** through real‑time leaderboards and streak tracking across users.
- **Multi‑platform**: Responsive **web app (React)** plus **mobile app (Flutter)** powered by shared APIs.

---

## 🧩 Features

- **Personalized course tracks**
  - Users answer a few questions or select their interests.
  - System suggests tailored learning paths based on preferences and past progress.

- **Gamified experience**
  - Daily streaks and completion badges.
  - Leaderboards showing top learners to encourage consistency and competition.

- **Course browsing & tracking**
  - Browse available tracks and modules.
  - Track progress, completed lessons, and remaining tasks.

- **Multi-platform architecture**
  - Web frontend built with **React**.
  - Backend REST APIs built with **Node.js** and **Express**.
  - Data stored in **MongoDB**.
  - Mobile client (Flutter) consumes the same APIs.

---

## 🛠️ Tech Stack

**Frontend**
- React  
- JavaScript  
- HTML, CSS  
- Tailwind CSS (styling)  

**Backend**
- Node.js  
- Express  
- MongoDB / Mongoose  

**ML & Tooling**
- Basic machine learning logic for recommendations (e.g., scoring / ranking tracks)  
- Python / Google Colab (for experimentation)  

**DevOps / Workflow**
- Git & GitHub  
- GitHub Pages / Render (for hosting, if used)

---

## 📁 Project Structure (high level)

CourseHub/ <br>
├─ frontend/          # React frontend app <br>
└─ backend/           # Node.js + Express API <br>

frontend/ <br>
├─ src/ <br>
│  ├─ components/     # Reusable UI components <br>
│  ├─ pages/          # Main app pages / routes <br>
│  ├─ hooks/          # Custom React hooks <br>
│  ├─ services/       # API calls, client-side logic <br>
│  └─ styles/         # Global styles / Tailwind config <br>
└─ package.json

backend/ <br>
├─ src/ <br>
│  ├─ models/         # Mongoose models <br>
│  ├─ routes/         # API route definitions <br>
│  ├─ controllers/    # Business logic for each route <br>
│  ├─ middlewares/    # Auth, validation, logging, etc. <br>
│  └─ config/         # DB connection, environment config <br>
└─ package.json <br>

---

## 📚 Core Flows
- User onboarding
- New users sign up and answer a few questions (goals, skill level, interests).
- The system recommends a course track using simple ML/scoring logic.
- Learning & tracking
- Users follow a track composed of modules/lessons.
- Progress and completion state are persisted in MongoDB.
- Gamification
- Streaks: count consecutive days of activity.
- Leaderboard: rank users by points/streak/completed lessons.
