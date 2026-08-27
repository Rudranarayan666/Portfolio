// Single Source of Truth for Rudranarayan Sahu's Portfolio
// ─────────────────────────────────────────────────────────
// To update content: edit this file only. Do NOT modify UI components.

export const PERSONAL_INFO = {
  name: "Rudranarayan Sahu",
  title: "Software Engineer & AI Systems Developer",
  status: "SYSTEMS ONLINE • SEEKING OPPORTUNITIES",
  tagline: "Building scalable full-stack applications, explainable AI architectures, and cybersecurity solutions.",
  bio: "Software Engineering student at A.P. Shah Institute of Technology with expertise in full-stack development, AI detection systems, and machine learning research.",
  email: "rudrasahu797@gmail.com",
  phone: "+91-8779989455",
  linkedin: "https://www.linkedin.com/in/rudranarayan-sahu-42017a368/",
  github: "https://github.com/Rudranarayan666",
  location: "Mumbai, Maharashtra",
  metrics: [
    { label: "CGPA", value: "9.22" },
    { label: "USRF Fellow", value: "Top 1%" },
    { label: "Hackathons", value: "3x Win / 4x Finalist" },
    { label: "CTF HackDeck", value: "1st Rank" }
  ]
};

// ──────────────────────────────────────────────────────────────
// HERO SECTION
// ──────────────────────────────────────────────────────────────
export const HERO_ROLES = [
  "Software Developer",
  "Full Stack Developer",
  "AI/ML Engineer"
];

export const HERO_AVAILABILITY = "Open to SDE & AI/ML Internships and Job Opportunities";

export const HERO_CIRCULAR_TEXT = "SOFTWARE DEVELOPER • FULL STACK • AI/ML ENGINEER •";

// ──────────────────────────────────────────────────────────────
// TERMINAL BOOT
// ──────────────────────────────────────────────────────────────
export const TERMINAL_BOOT_LOGS = [
  "> booting rudra_sahu.sys...",
  "> initializing core architecture: React / Python / FastAPI... OK",
  "> loading dataset engines: DuckDB / OpenCV / Scikit-Learn... OK",
  "> authenticating credentials: USRF_2026_FELLOW (Amity Univ)... VERIFIED",
  "> security scan: IEEE CTF HACKDECK 2.0 1ST PLACE... CONFIRMED",
  "> mounting full-stack modules: Next.js / MongoDB / Firebase... LOADED",
  "> SYSTEM READY"
];

// ──────────────────────────────────────────────────────────────
// EDUCATION
// ──────────────────────────────────────────────────────────────
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

// ──────────────────────────────────────────────────────────────
// EXPERIENCE
// Each entry supports: certificate (URL), linkedin (post URL)
// ──────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: "usrf",
    role: "USRF Research Fellow",
    company: "Amity Centre for Artificial Intelligence, Amity University",
    period: "June – July 2026",
    location: "Noida / Remote",
    badge: "Research Fellowship",
    description: [
      "Selected in the Top 1% of applicants nationwide to conduct funded machine learning research.",
      "Conducted research on ensemble ML models, explainability (SHAP, permutation importance), and leakage-controlled benchmarking."
    ],
    tech: ["Scikit-learn", "SHAP", "Pandas", "Optuna", "Statistical Modeling"],
    // LinkedIn post about this achievement — opens in new tab
    linkedin: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_usrf2026-amityuniversity-research-activity-7482094579245064193-ARth?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY",
    // Certificate URL — set when certificate is available
    certificate: "https://drive.google.com/file/d/1i_2Qn1X12_fkQCIkBpoWcKPRn2acwj_f/view?usp=sharing"
  },
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
    tech: ["Python", "Java", "AngularJS", "Odoo", "REST APIs"],
    linkedin: "",
    // IPLIT internship completion certificate
    certificate: "https://drive.google.com/file/d/1o475usJ75kKX38DQZtkMjuimPiqJl_6l/view?usp=sharing"
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
    tech: ["PHP", "MySQL", "REST APIs", "SQL Optimization"],
    linkedin: "",
    certificate: ""
  }
];

// ──────────────────────────────────────────────────────────────
// PROJECTS
// github: real repo URL or "" | live: live URL or "" (hides button when empty)
// ──────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "deepfake-detector",
    title: "DeepFake Detector",
    subtitle: "AI-Powered DeepFake Detection System",
    date: "2025",
    description: "Machine learning system to detect deepfake images and videos using advanced computer vision and signal analysis techniques.",
    metric: "✓ Multi-modal deepfake detection pipeline",
    stack: ["Python", "OpenCV", "PyTorch", "scikit-learn"],
    github: "https://github.com/Rudranarayan666/DeepFake-Detector",
    live: ""
  },
  {
    id: "datatalk-ai",
    title: "DataTalk-AI",
    subtitle: "Natural-Language Analytics Platform",
    date: "Feb 2026",
    description: "Query CSV datasets in plain English via English-to-SQL conversion with self-healing query execution using DuckDB.",
    metric: "✓ Self-healing SQL execution",
    stack: ["Python", "DuckDB", "Plotly", "Power BI"],
    github: "https://github.com/Rudranarayan666/DataTalk-AI",
    live: ""
  },
  {
    id: "mindforge",
    title: "MindForge",
    subtitle: "AI-Powered Learning & Skill Development Platform",
    date: "2025",
    description: "Intelligent platform for learning and skill development, leveraging AI to personalize educational experiences and track progress.",
    metric: "✓ Personalized AI-driven skill forging",
    stack: ["React.js", "Python", "AI/ML", "MongoDB"],
    github: "https://github.com/Rudranarayan666/mindforge",
    live: ""
  },
  {
    id: "usrf-ml-research",
    title: "USRF ML Research",
    subtitle: "Amity Centre for Artificial Intelligence",
    date: "Jun–Jul 2026",
    description: "Ensemble classification and explainability research; identifying and correcting data leakage in prior published pipelines.",
    metric: "✓ Leakage-controlled honest benchmarking",
    stack: ["Scikit-learn", "SHAP", "Pandas", "Optuna"],
    github: "",      // PASTE real GitHub repo URL here (if public)
    live: ""
  }
];

// ──────────────────────────────────────────────────────────────
// PRODUCTS (Shift Products Section)
// Showcase 3–4 products you built or contributed to
// ──────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: "rc-ads-product",
    name: "RC-ADS",
    tagline: "Reality-Consistent AI Detection System",
    description: "Multi-engine AI media authenticity detector using noise analysis, EXIF signals, and spatial artifact detection to generate an explainable Authenticity Confidence Score.",
    contribution: "Solo-built — Architecture, API, ML pipeline",
    technologies: ["Python", "FastAPI", "OpenCV", "scikit-image", "PyTorch"],
    features: [
      "Multi-engine signal fusion for content authenticity scoring",
      "High-throughput FastAPI backend for real-time media validation",
      "Explainable AI confidence output via AACS metric"
    ],
    github: "",   // PASTE real GitHub repo URL here
    live: ""
  },
  {
    id: "datatalk-product",
    name: "DataTalk AI",
    tagline: "Natural-Language SQL Engine",
    description: "English-to-SQL query platform for CSV/tabular datasets with self-healing query correction loop, in-memory DuckDB execution, and interactive Plotly dashboards.",
    contribution: "Solo-built — NLP pipeline, SQL engine, dashboard",
    technologies: ["Python", "DuckDB", "Plotly", "Power BI", "SQL"],
    features: [
      "Self-healing SQL execution loop with auto error correction",
      "Sub-second query execution on 500k+ row datasets via DuckDB",
      "Interactive Plotly + Power BI visual reporting"
    ],
    github: "",
    live: ""
  },
  {
    id: "lifeskillsphere-product",
    name: "LifeSkillSphere",
    tagline: "Full-Stack Life Skills & Psychometric Platform",
    description: "Full-stack learning platform featuring psychometric assessments, mood tracking, interactive skill modules, and a gamified achievement badge system.",
    contribution: "Lead Developer — Frontend, Backend, Auth",
    technologies: ["React.js", "Next.js", "MongoDB", "Firebase", "Vercel"],
    features: [
      "Psychometric assessment modules with real-time progress tracking",
      "MongoDB & Firebase Auth dual data pipeline",
      "Gamified achievement badges and interactive dashboards"
    ],
    github: "",
    live: ""
  },
  {
    id: "usrf-research-product",
    name: "USRF ML Research Pipeline",
    tagline: "Leakage-Controlled Ensemble ML Research",
    description: "Research-grade ML pipeline eliminating data leakage from published baselines, applying SHAP + permutation importance for explainable feature attribution across benchmark datasets.",
    contribution: "Lead Researcher — USRF 2026 Fellow, Amity University",
    technologies: ["Python", "Scikit-learn", "SHAP", "Pandas", "Optuna"],
    features: [
      "Leakage-controlled benchmark correction for published ML papers",
      "SHAP + permutation importance for explainable feature attribution",
      "Out-of-distribution evaluation benchmark validation"
    ],
    github: "",
    live: ""
  }
];

// ──────────────────────────────────────────────────────────────
// SKILLS
// ──────────────────────────────────────────────────────────────
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
      { name: "Agentic AI & LangChain", detail: "LLM orchestration, custom agents & tools", level: 92 },
      { name: "Prompt Engineering & MCP", detail: "Model Context Protocol servers & context controls", level: 95 },
      { name: "Vector Databases", detail: "Chroma, Pinecone, and vectorized embeddings retrieval", level: 88 },
      { name: "Pandas & NumPy", detail: "Vectorized data processing & statistical modeling", level: 95 },
      { name: "DuckDB & SQL", detail: "Self-healing query engine for DataTalk AI", level: 92 }
    ]
  },
  {
    name: "Full Stack Web Development",
    icon: "Layers",
    skills: [
      { name: "React.js & Next.js", detail: "Built LifeSkillSphere & interactive web apps", level: 92 },
      { name: "Node.js & Express.js", detail: "RESTful API creation & microservices", level: 88 },
      { name: "FastAPI & PHP", detail: "High-throughput backends & production internships", level: 88 },
      { name: "HTML5 & CSS3", detail: "Canvas 2D, Tailwind CSS, GSAP animations", level: 95 }
    ]
  },
  {
    name: "Databases, Cloud & Tools",
    icon: "Database",
    skills: [
      { name: "Claude Code & VS Code Tools", detail: "Modern agentic coding tools & custom editor configurations", level: 94 },
      { name: "MySQL & MongoDB", detail: "Relational schemas & NoSQL user data", level: 90 },
      { name: "Firebase & Vercel", detail: "Identity auth & cloud serverless deployments", level: 88 },
      { name: "Git & GitHub", detail: "CI/CD, version control, team leadership", level: 94 },
      { name: "Docker & Microservices", detail: "Service isolation & containerized deployments", level: 82 },
      { name: "Agile & Process Mining", detail: "Celonis certified & sprint management", level: 85 }
    ]
  }
];

// ──────────────────────────────────────────────────────────────
// ACHIEVEMENTS
// linkedin: URL to LinkedIn post about this achievement (opens new tab)
// ──────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    id: "hackdeck",
    title: "1st Place – IEEE CTF Cybersecurity National Hackathon",
    organization: "IEEE CTF HackDeck 2.0",
    category: "Cybersecurity CTF",
    icon: "Trophy",
    description: "Secured 1st Place nationwide in CTF challenges, demonstrating strong expertise in cybersecurity, vulnerability exploits, cryptography, and network forensics.",
    // LinkedIn post for this achievement — click to view post
    linkedin: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_hackdeck2abr0-ieeehackathon-cybersecurity-activity-7423676811768909824--0a5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY",
    certificate: "https://drive.google.com/file/d/1L-m4Kz1cqek9g3BAx2gxRsfUe8TtDpMo/view?usp=sharing"  // IEEE Hackathon certificate
  },
  {
    id: "oppstorm",
    title: "Winner – OppStorm DevOps Hackathon",
    organization: "OppStorm",
    category: "DevOps Rapid Prototyping",
    icon: "Award",
    description: "Recognized for developing an effective DevOps-focused automated solution under highly competitive hackathon conditions.",
    linkedin: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_devops-devsecops-kubernetes-activity-7421138022554927104-y8N3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY",
    certificate: "https://drive.google.com/file/d/1PlFjbU7AgToc-xDDwunTP6ZVu4CYKMs5/view?usp=sharing"  // DevOps certificate
  },
  {
    id: "dataweb",
    title: "Runner-Up – DataWeb Hackathon",
    organization: "DataWeb",
    category: "Generative AI",
    icon: "Flame",
    description: "Runner Up in DataWeb — Developed a Generative AI-focused solution, exploring and deploying practical real-world applications of LLM agents.",
    linkedin: "",
    certificate: "https://drive.google.com/file/d/1FisH0HRbnHWVaU3BX12ForhziaXRXFY3/view?usp=sharing"  // DataWeb Runner Up certificate
  },
  {
    id: "usrf-fellow",
    title: "USRF 2026 Research Fellow",
    organization: "Amity University",
    category: "Top 1% Nationwide",
    icon: "GraduationCap",
    description: "Selected among the Top 1% of applicants nationwide to conduct sponsored ML research on ensemble model reliability and explainability.",
    linkedin: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_usrf2026-amityuniversity-research-activity-7482094579245064193-ARth?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY",
    certificate: "https://drive.google.com/file/d/1i_2Qn1X12_fkQCIkBpoWcKPRn2acwj_f/view?usp=sharing"  // Amity Internship USRF certificate
  },
  {
    id: "hackathon-top12",
    title: "Hackathon — Top 12",
    organization: "Hackathon",
    category: "Top 12 Finish",
    icon: "Award",
    description: "Achieved a Top 12 position in the Hackathon, competing against hundreds of participants with an innovative solution.",
    linkedin: "",
    certificate: "https://drive.google.com/file/d/1awtEfvO1XPlOIjU2dBV9v2pAMwgOas16/view?usp=sharing"  // Hackathon Top 12 certificate
  },
  {
    id: "hackspiration-vit",
    title: "Hackspiration 26 — VIT Pune",
    organization: "VIT Pune",
    category: "Participation",
    icon: "Star",
    description: "Participation Certificate — Participated in Hackspiration 26 at VIT Pune, engaging in a competitive hackathon environment.",
    linkedin: "",
    certificate: "https://drive.google.com/file/d/1au1yzPU4HLTWfNhjvoEawnCxQkkfUs6i/view?usp=sharing"  // Hackspiration 26 participation certificate
  }
];

// ──────────────────────────────────────────────────────────────
// CAMPUS LEADERSHIP
// linkedin: URL to LinkedIn post/profile for each club (PASTE when available)
// ──────────────────────────────────────────────────────────────
export const CAMPUS_LEADERSHIP = [
  {
    club: "Information Technology Students Association (ITSA)",
    // Primary LinkedIn post
    linkedin: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_reactjs-webdevelopment-publicspeaking-activity-7377017810570612736-Sb5_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY",
    // LinkedIn posts related to ITSA activities
    linkedinPosts: [
      {
        label: "ReactJS Session — Web Development & Public Speaking",
        url: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_reactjs-webdevelopment-publicspeaking-activity-7377017810570612736-Sb5_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY"
      }
    ],
    roles: [
      { role: "Student Ambassador", period: "2026–2027", desc: "Representing and promoting technical initiatives, student engagement, and community activities." },
      { role: "Secretary", period: "2025", desc: "Coordinated technical events, workshops, and organizational activities while collaborating with student teams." },
      { role: "Technical Member", period: "2024", desc: "Contributed to technical activities, events, and student-focused initiatives." }
    ]
  },
  {
    club: "Cybersecurity Club",
    // LinkedIn post — Cybersecurity bootcamp conducted by the club
    linkedin: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_cybersecurity-bootcamp-networking-activity-7377705592095944706-AXKf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY",
    linkedinPosts: [
      {
        label: "Cybersecurity Bootcamp — Networking & Club Session",
        url: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_cybersecurity-bootcamp-networking-activity-7377705592095944706-AXKf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY"
      }
    ],
    roles: [
      { role: "President", period: "2026–2027", desc: "Leading the cybersecurity community, organizing technical events, and driving learning initiatives." },
      { role: "Technical Co-Head", period: "2025", desc: "Led technical initiatives, cybersecurity activities, and hands-on learning sessions." }
    ]
  }
];

// ──────────────────────────────────────────────────────────────
// MENTORSHIP
// ──────────────────────────────────────────────────────────────
export const MENTORSHIP = {
  headline: "Mentorship & Community Impact",
  stats: "Mentored 100+ students",
  details: [
    "Mentored 100+ students through hands-on bootcamps, technical workshops, and peer-learning sessions, helping students strengthen their skills in Cybersecurity, Development, DevOps, and emerging AI technologies.",
    "Organized and contributed to technical sessions focused on practical learning, problem-solving, and industry-relevant technologies."
  ],
  // LinkedIn posts showcasing mentorship activities
  linkedinPosts: [
    {
      label: "ReactJS Session — Web Development & Public Speaking",
      url: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_reactjs-webdevelopment-publicspeaking-activity-7377017810570612736-Sb5_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY"
    },
    {
      label: "Guided 11th & 12th Std Students — AI & Career",
      url: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_education-learning-motivation-activity-7395353552061370368-tq2j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY"
    },
    {
      label: "Cybersecurity Bootcamp — Club Session",
      url: "https://www.linkedin.com/posts/rudranarayan-sahu-42017a368_cybersecurity-bootcamp-networking-activity-7377705592095944706-AXKf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsmSNgB9emnwIOd74VWRIFLhNVZgqi7AmY"
    }
  ]
};

// ──────────────────────────────────────────────────────────────
// CERTIFICATIONS
// certificateUrl: direct link to view/download certificate
// ──────────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: "oracle-agentic-ai",
    title: "Oracle Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    role: "Certified Foundations Associate",
    duration: "2026",
    badge: "Verified",
    // Direct clickable Oracle badge/certificate link
    certificateUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=52BB2AAE63CD9CBD4DF69321B7B8215AADF82263BB4D7168180CB36A8A178EE4"
  },
  {
    id: "ibm-data-analysis",
    title: "IBM Data Analysis with Python Certification",
    issuer: "IBM",
    role: "Certified — Data Analysis with Python",
    duration: "2026",
    badge: "Verified",
    // IBM certificate on Google Drive
    certificateUrl: "https://drive.google.com/file/d/12ywgDMEiJ_ljc1I6Vr-VO_z_O1lNhQ2h/view?usp=sharing"
  },
  {
    id: "celonis-process-mining",
    title: "Celonis Process Mining",
    issuer: "Celonis",
    role: "Certified — Process Mining Fundamentals",
    duration: "2026",
    badge: "Verified",
    // Celonis certificate verification link
    certificateUrl: "https://certificate.eduskillsfoundation.org/verify/4326b5e7d45590a34a5b/4326b5e7d45590a34a5b"
  },
  {
    id: "ibm-prompt-engineering",
    title: "Prompt Engineering",
    issuer: "IBM",
    role: "Certified — Prompt Engineering",
    duration: "2026",
    badge: "Verified",
    // Prompt Engineering certificate on Google Drive
    certificateUrl: "https://drive.google.com/file/d/1BlRv_3PImodw6-vd4ujOTyuKzpUegWCq/view?usp=sharing"
  }
];
