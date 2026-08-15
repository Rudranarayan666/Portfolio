// Single Source of Truth for Rudranarayan Sahu's Portfolio

export const PERSONAL_INFO = {
  name: "Rudranarayan Sahu",
  title: "Software Engineer & AI Systems Developer",
  status: "SYSTEMS ONLINE • SEEKING OPPORTUNITIES",
  tagline: "Building scalable full-stack applications, explainable AI architectures, and cybersecurity solutions.",
  bio: "Software Engineering student at A.P. Shah Institute of Technology with expertise in full-stack development, AI detection systems, and machine learning research.",
  email: "rudrasahu797@gmail.com",
  phone: "+91-8779989455",
  linkedin: "https://www.linkedin.com/in/rudranarayan-sahu-42017a368/",
  github: "https://github.com/Rudranarayan",
  location: "Thane / Mumbai, India",
  metrics: [
    { label: "CGPA", value: "9.22" },
    { label: "USRF Fellow", value: "Top 1%" },
    { label: "Hackathons", value: "3x Win / 4x Finalist" },
    { label: "CTF HackDeck", value: "1st Rank" }
  ]
};

export const TERMINAL_BOOT_LOGS = [
  "> booting rudra_sahu.sys...",
  "> initializing core architecture: React / Python / FastAPI... OK",
  "> loading dataset engines: DuckDB / OpenCV / Scikit-Learn... OK",
  "> authenticating credentials: USRF_2026_FELLOW (Amity Univ)... VERIFIED",
  "> security scan: IEEE CTF HACKDECK 2.0 1ST PLACE... CONFIRMED",
  "> mounting full-stack modules: Next.js / MongoDB / Firebase... LOADED",
  "> status: SYSTEM ONLINE // LAUNCHING VECTOR"
];

export const EDUCATION = {
  institution: "A.P. Shah Institute of Technology (APSIT), Thane",
  degree: "B.E. in Information Technology",
  timeline: "2023 – 2027",
  cgpa: "9.22 / 10.0",
  highlights: [
    "Mentored 100+ junior engineering students in full-stack development & computing.",
    "Led college hackathon teams to 3x national wins and 4x national final placements.",
    "Selected as USRF 2026 Research Fellow among Top 1% nationwide applicants at Amity University."
  ]
};

export const EXPERIENCE = [
  {
    id: "iplit",
    role: "Software Developer Intern (Hybrid)",
    company: "IPLIT Solutions LLP",
    period: "Jun 2025 – Feb 2026",
    location: "Mumbai, India",
    badge: "Enterprise Systems",
    description: [
      "Automated Odoo workflows, improving backend processing efficiency and reducing operational overhead.",
      "Developed healthcare backend modules in Python, Java, and AngularJS with improved integration and validation."
    ],
    tech: ["Python", "Java", "AngularJS", "Odoo", "REST APIs"]
  },
  {
    id: "1stop",
    role: "Backend Developer Intern",
    company: "1Stop.ai",
    period: "May 2025 – Jun 2025",
    location: "Remote",
    badge: "REST APIs",
    description: [
      "Built and optimized high-concurrency REST APIs using PHP and MySQL.",
      "Optimized query execution times for large data processing backends."
    ],
    tech: ["PHP", "MySQL", "REST APIs", "SQL Optimization"]
  }
];

export const PROJECTS = [
  {
    id: "rc-ads",
    title: "RC-ADS: Reality-Consistent AI Detection System",
    period: "Feb 2026 – Mar 2026",
    category: "AI & Cybersecurity",
    badge: "Explainable AI",
    featured: true,
    posterGradient: "from-violet-900/80 via-indigo-900/60 to-slate-950",
    tagline: "Multi-engine AI media detector with explainable authenticity confidence scores",
    summary: "Built an AI-powered content authenticity detection system utilizing Python, FastAPI, OpenCV, and scikit-image to inspect media noise patterns, EXIF structural signals, and spatial artifacts.",
    keyPoints: [
      "Generates an explainable AI Authenticity Confidence Score (AACS) via multi-engine signal fusion.",
      "Extracted high-frequency noise artifacts using OpenCV & scikit-image.",
      "Deployed high-throughput FastAPI backend for real-time media validation."
    ],
    tech: ["Python", "FastAPI", "OpenCV", "scikit-image", "PyTorch"],
    links: {
      github: "https://github.com/Rudranarayan",
      demo: "#"
    }
  },
  {
    id: "datatalk-ai",
    title: "DataTalk AI — Self-Healing SQL Engine",
    period: "Feb 2026",
    category: "AI & Data Engineering",
    badge: "Natural Language SQL",
    featured: true,
    posterGradient: "from-cyan-900/80 via-blue-900/60 to-slate-950",
    tagline: "Natural-language query engine for CSV datasets with automatic self-correction",
    summary: "Natural-language CSV querying platform with English-to-SQL translation, self-healing query correction using DuckDB, and interactive visual dashboards.",
    keyPoints: [
      "Implemented a self-healing SQL execution loop that detects syntax errors and auto-corrects queries.",
      "Integrated Plotly and Power BI for sub-second analytical reporting.",
      "Achieved fast in-memory execution across 500k+ dataset rows via DuckDB."
    ],
    tech: ["Python", "DuckDB", "Plotly", "Power BI", "SQL"],
    links: {
      github: "https://github.com/Rudranarayan",
      demo: "#"
    }
  },
  {
    id: "lifeskillsphere",
    title: "LifeSkillSphere Platform",
    period: "Oct 2025 – Dec 2025",
    category: "Full-Stack Web",
    badge: "Next.js / MongoDB",
    featured: true,
    posterGradient: "from-emerald-900/80 via-teal-900/60 to-slate-950",
    tagline: "Full-stack life skills & psychometric tracking platform with achievement badges",
    summary: "Architected a full-stack learning platform featuring mood tracking, psychometric assessments, interactive modules, and gamified achievement badges.",
    keyPoints: [
      "Built responsive UI with Next.js & React.js, deployed on Vercel.",
      "Implemented MongoDB & Firebase Auth dual data pipeline.",
      "Added interactive progress tracking and achievement badges."
    ],
    tech: ["React.js", "Next.js", "MongoDB", "Firebase", "Vercel"],
    links: {
      github: "https://github.com/Rudranarayan",
      demo: "#"
    }
  },
  {
    id: "usrf-ml-research",
    title: "USRF Leakage-Controlled ML Research",
    period: "2026",
    category: "Machine Learning & Research",
    badge: "Amity USRF 2026",
    featured: true,
    posterGradient: "from-amber-900/80 via-orange-900/60 to-slate-950",
    tagline: "Ensemble classification and explainability research with leakage-controlled benchmarks",
    summary: "Conducted research as a USRF 2026 Fellow focused on ensemble classification models, model interpretability (SHAP, permutation importance), and correcting data leakage in published pipelines.",
    keyPoints: [
      "Eliminated target/feature data leakage in published baseline pipelines.",
      "Applied SHAP and permutation importance for explainable feature attribution.",
      "Validated performance across out-of-distribution evaluation benchmark sets."
    ],
    tech: ["Python", "Scikit-learn", "SHAP", "Pandas", "Statistical Modeling"],
    links: {
      github: "https://github.com/Rudranarayan",
      demo: "#"
    }
  }
];

export const SKILLS_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", detail: "Used in 4+ production & research projects", level: 94 },
      { name: "Java", detail: "Core OOP & enterprise backend services", level: 86 },
      { name: "JavaScript / ES6+", detail: "Used in all web apps & interactive engines", level: 90 },
      { name: "C++", detail: "Algorithm design & competitive problem solving", level: 84 },
      { name: "Apex & C# (.NET)", detail: "Enterprise software development logic", level: 80 }
    ]
  },
  {
    name: "Data Analytics & ML",
    icon: "Brain",
    skills: [
      { name: "Scikit-Learn & PyTorch", detail: "Ensemble classification & computer vision models", level: 90 },
      { name: "Explainable AI (SHAP)", detail: "Applied in USRF 2026 research pipeline", level: 88 },
      { name: "Pandas & NumPy", detail: "Vectorized data processing & statistical modeling", level: 95 },
      { name: "DuckDB & SQL", detail: "Self-healing query engine for DataTalk AI", level: 92 },
      { name: "Power BI & Plotly", detail: "Custom analytical dashboard reporting", level: 86 }
    ]
  },
  {
    name: "Full Stack Web Development",
    icon: "Layers",
    skills: [
      { name: "React.js & Next.js", detail: "Shipped LifeSkillSphere & interactive web apps", level: 92 },
      { name: "Node.js & Express.js", detail: "RESTful API creation & microservices", level: 88 },
      { name: "FastAPI & PHP", detail: "High-throughput backends & production internships", level: 88 },
      { name: "HTML5 & CSS3", detail: "Canvas 2D, Tailwind CSS, GSAP animations", level: 95 }
    ]
  },
  {
    name: "Databases, Cloud & Tools",
    icon: "Database",
    skills: [
      { name: "MySQL & MongoDB", detail: "Relational schemas & NoSQL user data", level: 90 },
      { name: "Firebase & Vercel", detail: "Identity auth & cloud serverless deployments", level: 88 },
      { name: "Git & GitHub", detail: "CI/CD, version control, team leadership", level: 94 },
      { name: "Docker & Microservices", detail: "Service isolation & containerized deployments", level: 82 },
      { name: "Agile & Process Mining", detail: "Celonis certified & sprint management", level: 85 }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "hackdeck",
    title: "1st Prize — HackDeck 2.0 (2026)",
    organization: "IEEE Cybersecurity CTF Hackathon",
    category: "Cybersecurity CTF",
    icon: "Trophy",
    description: "Secured 1st rank nationwide by solving complex web vulnerability exploits, cryptography, and network forensics challenges."
  },
  {
    id: "hackathon-winner",
    title: "3× Winner & 4× Finalist",
    organization: "National-Level Hackathons",
    category: "Rapid Prototyping",
    icon: "Award",
    description: "Built and pitched full-stack AI applications under 24-48 hour hackathon sprint timelines."
  },
  {
    id: "sih-lead",
    title: "Team Leader — Smart India Hackathon",
    organization: "Internal Hackathon Round",
    category: "Technical Leadership",
    icon: "Users",
    description: "Led team framing, architecture design, and problem solving for government project statements."
  },
  {
    id: "usrf-fellow",
    title: "USRF 2026 Research Fellow",
    organization: "Amity University",
    category: "Top 1% Nationwide",
    icon: "GraduationCap",
    description: "Selected among Top 1% applicants to conduct sponsored ML research on ensemble model reliability."
  }
];

export const CERTIFICATIONS = [
  {
    title: "IBM Data Analysis with Python Certification",
    issuer: "IBM",
    badge: "Verified"
  },
  {
    title: "Celonis Academic Process Mining Fundamentals",
    issuer: "Celonis",
    badge: "Verified"
  },
  {
    title: "IBM Prompt Engineering for Everyone Certification",
    issuer: "IBM",
    badge: "Verified"
  }
];
