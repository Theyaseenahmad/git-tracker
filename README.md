# Git Tracker - GitHub User Analyzer 🧑‍💻📊

[![Frontend](https://img.shields.io/badge/Frontend-React-blue)](https://reactjs.org)
[![UI Library](https://img.shields.io/badge/UI-ShadCN-red)](https://ui.shadcn.dev/)
[![Charting](https://img.shields.io/badge/Charts-Recharts-yellow)](https://recharts.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blueviolet)](https://www.typescriptlang.org/)

**Live Demo:**  
https://git-tracker-one.vercel.app/

![Git Tracker Banner](https://raw.githubusercontent.com/Theyaseenahmad/git-tracker/main/public/preview.png)

A lightweight GitHub analyzer that fetches key public metrics of a user profile and displays recent commit activity visually.

---

## ✨ Key Features

- 📦 Lists total public repositories for a GitHub user  
- 📊 Shows a bar chart of **commits in the last 7 days**  
- ⏱️ Fetches commit data dynamically using GitHub API  
- 🎨 Clean and responsive UI with ShadCN components  
- ⚡ Built using React + TypeScript + Vite  

---

## 💻 Tech Stack

**Frontend**  
React | TypeScript | Vite | ShadCN UI | Recharts

---

## 📈 Commit Data + Installation + Folder Structure

```bash
[
  { "date": "2025-03-25", "commits": 1 },
  { "date": "2025-03-24", "commits": 2 },
  { "date": "2025-03-22", "commits": 3 },
  { "date": "2025-03-21", "commits": 7 }
]

# 📥 Installation

git clone https://github.com/YOUR_USERNAME/git-tracker.git
cd git-tracker
npm install

# 📂 Folder Structure

git-tracker/
├── components/
│   └── manual/
│       └── Charts.tsx
├── lib/
│   └── http/
│       ├── getCommits.ts
│       └── getProfile.ts
├── pages/
│   └── Home.tsx
├── public/
├── README.md
└── vite.config.ts
