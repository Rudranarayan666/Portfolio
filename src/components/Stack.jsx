import React from 'react';
import { Cpu, Code2, Server, Cloud } from 'lucide-react';
import {
  PythonIcon,
  JavaIcon,
  DotNetIcon,
  GitIcon,
  LinuxIcon,
  PyTorchIcon,
  ScikitLearnIcon,
  DuckDBIcon,
  PandasIcon,
  LangChainIcon,
  OpenCVIcon,
  ClaudeIcon,
  ReactIcon,
  NextjsIcon,
  FastAPIIcon,
  NodejsIcon,
  MongoDBIcon,
  MySQLIcon,
  TailwindIcon,
  DockerIcon,
  FirebaseIcon,
  VercelIcon,
  PostmanIcon,
  VSCodeIcon,
  ConceptIcon
} from './TechIcons';

const stackCategories = [
  {
    title: 'Core Computer Science',
    icon: Code2,
    badgeBg: 'bg-[#fde047]',
    skills: [
      { name: 'Python', Icon: PythonIcon },
      { name: 'DSA', Icon: () => <ConceptIcon type="dsa" /> },
      { name: 'Java', Icon: JavaIcon },
      { name: '.NET & C#', Icon: DotNetIcon },
      { name: 'OOP', Icon: () => <ConceptIcon type="oop" /> },
      { name: 'SQL & DBs', Icon: MySQLIcon },
      { name: 'Git & GitHub', Icon: GitIcon },
      { name: 'Linux', Icon: LinuxIcon },
      { name: 'Operating Systems', Icon: () => <ConceptIcon type="os" /> },
      { name: 'Networks', Icon: () => <ConceptIcon type="network" /> },
    ]
  },
  {
    title: 'AI / Machine Learning & Data',
    icon: Cpu,
    badgeBg: 'bg-[#86efac]',
    skills: [
      { name: 'PyTorch', Icon: PyTorchIcon },
      { name: 'Scikit-Learn', Icon: ScikitLearnIcon },
      { name: 'Pandas & NumPy', Icon: PandasIcon },
      { name: 'DuckDB & SQL', Icon: DuckDBIcon },
      { name: 'Power BI & Plotly', Icon: () => <ConceptIcon type="dsa" /> },
      { name: 'LangGraph / LangChain', Icon: LangChainIcon },
      { name: 'Agentic AI & MCP', Icon: () => <ConceptIcon type="agent" /> },
      { name: 'XAI / SHAP', Icon: () => <ConceptIcon type="dsa" /> },
      { name: 'OpenCV', Icon: OpenCVIcon },
      { name: 'Vector Databases', Icon: () => <ConceptIcon type="vector" /> },
      { name: 'Claude Code', Icon: ClaudeIcon },
    ]
  },
  {
    title: 'Full-Stack Development',
    icon: Server,
    badgeBg: 'bg-[#7dd3fc]',
    skills: [
      { name: 'React.js', Icon: ReactIcon },
      { name: 'Next.js', Icon: NextjsIcon },
      { name: 'FastAPI', Icon: FastAPIIcon },
      { name: 'Node.js & Express', Icon: NodejsIcon },
      { name: 'MongoDB', Icon: MongoDBIcon },
      { name: 'MySQL', Icon: MySQLIcon },
      { name: 'RESTful APIs', Icon: () => <ConceptIcon type="api" /> },
      { name: 'Auth (JWT/OAuth)', Icon: () => <ConceptIcon type="auth" /> },
      { name: 'Tailwind CSS', Icon: TailwindIcon },
    ]
  },
  {
    title: 'DevOps, Cloud & Tools',
    icon: Cloud,
    badgeBg: 'bg-[#d8b4fe]',
    skills: [
      { name: 'Docker', Icon: DockerIcon },
      { name: 'Linux Bash', Icon: () => <ConceptIcon type="bash" /> },
      { name: 'CI/CD Pipelines', Icon: () => <ConceptIcon type="cicd" /> },
      { name: 'GitHub Actions', Icon: GitIcon },
      { name: 'Firebase', Icon: FirebaseIcon },
      { name: 'Vercel', Icon: VercelIcon },
      { name: 'Postman', Icon: PostmanIcon },
      { name: 'VS Code', Icon: VSCodeIcon },
    ]
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-12 sm:py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <div className="neo-badge bg-[#d8b4fe] text-black">
            <Cpu className="w-3.5 h-3.5" />
            <span>MY TOOLKIT</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-black">
            Tech <span className="underline decoration-4 decoration-[#86efac]">Stack</span>
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm font-medium">
            Production-tested languages, AI frameworks, databases, and DevOps tools.
          </p>
        </div>

        {/* Categorized Pill Groups with Respective Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {stackCategories.map((cat, idx) => {
            const HeaderIcon = cat.icon;
            return (
              <div
                key={idx}
                className="neo-box p-4 sm:p-6 bg-white space-y-3.5 sm:space-y-4"
              >
                <div className="flex items-center space-x-2.5 sm:space-x-3 border-b-2 border-zinc-100 pb-2.5 sm:pb-3">
                  <div className={`p-2 sm:p-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] ${cat.badgeBg}`}>
                    <HeaderIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-black">
                    {cat.title}
                  </h3>
                </div>

                {/* Tactile Stickers with Respective Icons */}
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {cat.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.Icon;
                    return (
                      <span
                        key={skillIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl bg-zinc-50 hover:bg-[#fde047] border-2 border-black font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-default select-none"
                      >
                        <SkillIcon className="w-4 h-4 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
