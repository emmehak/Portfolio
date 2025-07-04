import React, { useState, useEffect, useRef } from "react";
import { Code2, Database, Server, Globe } from "lucide-react";

const skillCategories = {
  frontend: {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Redux", level: 80, color: "bg-red-800" }
      { name: "TypeScript", level: 70, color: "bg-blue-600" },
      { name: "Redux", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "BootStrap", level: 80, color: "bg-cyan-500" },
      { name: "JavaScript", level: 95, color: "bg-yellow-500" },
      { name: "HTML/CSS", level: 98, color: "bg-orange-500" },
    ],
  },
  backend: {
    title: "Backend",
    icon: Server,
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-600" },
      { name: "Python", level: 85, color: "bg-blue-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "REST API", level: 92, color: "bg-purple-500" },
    ],
  },
  database: {
    title: "Database",
    icon: Database,
    color: "from-purple-400 to-violet-400",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-500" },
      { name: "PostgreSQL", level: 80, color: "bg-blue-600" },
      { name: "MSSQLServer", level: 90, color: "bg-orange-500" },
      { name: "Firebase", level: 92, color: "bg-yellow-500" },
    ],
  },
  tools: {
    title: "Tools & Others",
    icon: Globe,
    color: "from-orange-400 to-red-400",
    skills: [
      { name: "Git/GitHub", level: 95, color: "bg-gray-800" },
      { name: "Docker", level: 75, color: "bg-blue-500" },
      { name: "AWS", level: 70, color: "bg-orange-500" },
      { name: "Figma", level: 80, color: "bg-purple-500" },
    ],
  },
};

const SkillBar = ({ skill, index, isVisible }) => (
  <div
    className={`transform transition-all duration-700 ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-medium">{skill.name}</span>
      <span className="text-gray-400 text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
        style={{
          width: isVisible ? `${skill.level}%` : "0%",
          transitionDelay: `${index * 100 + 200}ms`,
        }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  const { title, icon, color, skills } = skillCategories[activeCategory];
  const Icon = icon;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 min-h-screen relative overflow-hidden"
    >
      {/* Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-5xl font-bold mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency
          levels
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-8">
        {/* Categories */}
        <div className="space-y-4">
          {Object.entries(skillCategories).map(([key, cat]) => {
            const IconCat = cat.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`w-full p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${cat.color} bg-opacity-20 border-white/30 shadow-lg`
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${cat.color} bg-opacity-20`}
                  >
                    <IconCat
                      className={`w-6 h-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{cat.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {cat.skills.length} skills
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills */}
        <div className="lg:col-span-3 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
          <div className="flex items-center space-x-4 mb-8">
            <div
              className={`p-4 rounded-xl bg-gradient-to-r ${color} bg-opacity-20`}
            >
              <Icon
                className={`w-8 h-8 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-gray-400">Technical Proficiency</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={i}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`px-4 py-2 bg-gradient-to-r ${color} bg-opacity-10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${i * 100}ms forwards`
                    : "none",
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
