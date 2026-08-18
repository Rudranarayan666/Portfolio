<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&color=6C63FF&center=true&vCenter=true&width=600&lines=Rudranarayan+Sahu;Software+Engineer+%26+AI+Developer;Full-Stack+%7C+ML+%7C+Cybersecurity" alt="Typing SVG" />
</h1>

<p align="center">
  <strong>🚀 Personal Portfolio — Built with React + Vite + Tailwind CSS + GSAP</strong>
</p>

<p align="center">
  <a href="https://github.com/Rudranarayan666/Portfolio/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Rudranarayan666/Portfolio?style=for-the-badge&color=6C63FF&labelColor=0d0d0d"/></a>
  <a href="https://github.com/Rudranarayan666/Portfolio/forks"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Rudranarayan666/Portfolio?style=for-the-badge&color=00d4ff&labelColor=0d0d0d"/></a>
  <a href="https://github.com/Rudranarayan666/Portfolio/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge&labelColor=0d0d0d"/></a>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&labelColor=0d0d0d"/>
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&labelColor=0d0d0d"/>
</p>

<br/>

---

## 👤 About Me

Hi, I'm **Rudranarayan Sahu** — a Software Engineering student at **A.P. Shah Institute of Technology (APSIT), Thane**, specializing in **Full-Stack Development**, **Explainable AI**, and **Cybersecurity**.

| 🎓 Degree | B.E. in Information Technology (2023–2027) |
|---|---|
| 📍 Location | Thane / Mumbai, India |
| 📊 CGPA | **9.22 / 10.0** |
| 🏆 Research | **USRF 2026 Fellow** — Top 1% Nationwide (Amity University) |
| 🥇 Hackathons | **3× National Winner** • **4× National Finalist** |
| 🔐 CTF | **1st Rank** — IEEE CTF HackDeck 2.0 |

---

## ✨ Portfolio Features

| Feature | Details |
|---|---|
| 🖥️ **Terminal Boot Screen** | Animated CLI-style intro sequence |
| 🌌 **Space Journey Animation** | GSAP-powered immersive scroll experience |
| 📊 **Skills Dashboard** | Interactive proficiency bars with category tabs |
| 🤖 **AI Chatbot** | Ask anything about my resume & projects |
| 🎨 **Theme Picker** | Multi-theme dynamic color system |
| 🌐 **Floating Symbols** | Canvas-based animated background |
| 📁 **Project Modals** | Detailed project cards with tech stacks |
| 📄 **Resume Modal** | In-app resume viewer |
| 📬 **Contact Section** | Direct email & social links |
| 📱 **Fully Responsive** | Mobile-first design across all breakpoints |

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

### Animations & Motion
![GSAP](https://img.shields.io/badge/GSAP_3-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion_12-0055FF?style=flat-square&logo=framer&logoColor=white)

### Utilities
![Lucide React](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square)
![clsx](https://img.shields.io/badge/clsx-gray?style=flat-square)
![tailwind-merge](https://img.shields.io/badge/tailwind--merge-38B2AC?style=flat-square)

### Dev Tools
![oxlint](https://img.shields.io/badge/oxlint-orange?style=flat-square)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+`

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/Rudranarayan666/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images & media
│   ├── components/
│   │   ├── Dashboard/    # Skills, Projects, Achievements panels
│   │   ├── Hero.jsx      # Hero section with terminal boot
│   │   ├── Journey.jsx   # Timeline & experience section
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Stack.jsx     # Tech stack display
│   │   ├── Wins.jsx      # Achievements & awards
│   │   ├── About.jsx     # About me section
│   │   ├── Contact.jsx   # Contact section
│   │   ├── Chatbot.jsx   # AI portfolio chatbot
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── Footer.jsx    # Footer
│   │   ├── ResumeModal.jsx       # In-app resume viewer
│   │   ├── ThemePicker.jsx       # Multi-theme selector
│   │   ├── TerminalBoot.jsx      # CLI intro animation
│   │   ├── SpaceJourney.jsx      # GSAP scroll experience
│   │   ├── FloatingSymbols.jsx   # Canvas background animation
│   │   └── NetworkCanvas.jsx     # Particle network effect
│   ├── content.js        # ✅ Single source of truth for all portfolio data
│   ├── App.jsx           # Root app component
│   ├── main.jsx          # Entry point
│   ├── App.css           # Global component styles
│   └── index.css         # Base CSS & design tokens
├── index.html
├── vite.config.js
└── package.json
```

> 💡 **Tip:** All portfolio content (bio, projects, skills, experience) is managed from a single file: [`src/content.js`](./src/content.js). Edit this file to update the portfolio.

---

## 🏆 Featured Projects

### 🔍 RC-ADS: Reality-Consistent AI Detection System
> Multi-engine AI media detector with explainable authenticity confidence scores

- **Tech:** Python, FastAPI, OpenCV, scikit-image, PyTorch
- Generates an explainable **AI Authenticity Confidence Score (AACS)** via multi-engine signal fusion
- Extracted high-frequency noise artifacts using OpenCV & scikit-image

---

### 🗣️ DataTalk AI — Self-Healing SQL Engine
> Natural-language query engine for CSV datasets with automatic self-correction

- **Tech:** Python, DuckDB, Plotly, Power BI, SQL
- Self-healing SQL execution loop that detects and auto-corrects syntax errors
- Achieves fast in-memory execution across **500k+ dataset rows** via DuckDB

---

### 🌐 LifeSkillSphere Platform
> Full-stack life skills & psychometric tracking platform with achievement badges

- **Tech:** React.js, Next.js, MongoDB, Firebase, Vercel
- Mood tracking, psychometric assessments, and gamified achievement badges
- MongoDB & Firebase Auth dual data pipeline

---

### 📊 USRF Leakage-Controlled ML Research
> Ensemble classification and explainability research (Amity University USRF 2026)

- **Tech:** Python, Scikit-learn, SHAP, Pandas, Statistical Modeling
- Eliminated target/feature data leakage in published baseline pipelines
- Applied SHAP and permutation importance for explainable feature attribution

---

## 🎓 Experience

| Role | Company | Period |
|---|---|---|
| 🔬 USRF Research Fellow | Amity Centre for AI, Amity University | 2026 – Ongoing |
| 💻 Software Developer Intern | IPLIT Solutions LLP | Jun 2025 – Feb 2026 |
| ⚙️ Backend Developer Intern | 1Stop.ai | May 2025 – Jun 2025 |

---

## 🏅 Achievements

- 🥇 **1st Place** — IEEE CTF HackDeck 2.0 (National Cybersecurity Hackathon)
- 🏆 **Winner** — OppStorm DevOps Hackathon
- 🥈 **Runner-Up** — DataWeb Generative AI Hackathon
- 🎓 **USRF 2026 Research Fellow** — Top 1% Nationwide, Amity University

---

## 📬 Connect With Me

<p>
  <a href="https://www.linkedin.com/in/rudranarayan-sahu-42017a368/">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="https://github.com/Rudranarayan">
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="mailto:rudrasahu797@gmail.com">
    <img alt="Email" src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>

- 📧 **Email:** rudrasahu797@gmail.com
- 📞 **Phone:** +91-8779989455
- 📍 **Location:** Thane / Mumbai, India

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it as a template for your own portfolio. A credit or star ⭐ is appreciated!

---

<p align="center">
  Made with ❤️ by <strong>Rudranarayan Sahu</strong> · 
  <a href="https://github.com/Rudranarayan666/Portfolio">⭐ Star this repo</a>
</p>
