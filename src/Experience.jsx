import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";

const experiences = [
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC 2025)",
    location: "Remote",
    period: "July 2025 – Present",
    type: "Open Source",
    description:
      "Contributing to frontend-heavy open-source projects built with React and the MERN stack.",
    achievements: [
      "Selected as a contributor for GSSoC 2025 among nationwide applicants",
      "Set up local development environments for MERN-based projects",
      "Fixed UI/UX bugs and improved overall design consistency",
      "Enhanced reusability and modularity of React components",
    ],
    technologies: [
      "React",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Next.js",
      "TailwindCSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],
    color: "from-pink-500 to-yellow-500",
  },
];

const stats = [
  {
    label: "Years of Experience",
    value: "1+",
    color: "from-blue-400 to-cyan-400",
  },
  {
    label: "Projects Completed",
    value: "10+",
    color: "from-purple-400 to-pink-400",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    color: "from-green-400 to-emerald-400",
  },
];

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Docker",
  "Python",
  "Firebase",
  "MySQL",
  "Rest API",
  "TailwindCSS",
  "BootStrap",
];

const TimelineItem = React.memo(
  ({ experience, index, isActive, onClick, isVisible }) => {
    const color = experience.color;
    const timelineLineClass = isActive
      ? `bg-gradient-to-b ${color}`
      : "bg-gray-600";
    const dotClass = isActive
      ? `bg-gradient-to-r ${color} shadow-lg shadow-purple-500/50 scale-125`
      : "bg-gray-600 hover:bg-gray-500";

    const containerClasses = `relative pl-8 pb-8 cursor-pointer transform transition-all duration-500 ${
      isActive ? "scale-105" : "hover:scale-102"
    } ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`;

    const cardClasses = `ml-6 p-6 rounded-xl border transition-all duration-300 ${
      isActive
        ? `bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border-white/20 shadow-xl shadow-purple-500/20`
        : "bg-slate-800/40 backdrop-blur-sm border-white/10 hover:border-white/20"
    }`;

    return (
      <div
        className={containerClasses}
        style={{ transitionDelay: `${index * 200}ms` }}
        onClick={() => onClick(index)}
      >
        {/* Timeline Line and Dot */}
        <div
          className={`absolute left-0 top-0 w-px h-full ${timelineLineClass}`}
        >
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-300 ${dotClass}`}
          >
            {isActive && (
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} animate-ping opacity-30`}
              />
            )}
          </div>
        </div>

        {/* Experience Card */}
        <div className={cardClasses}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
            <div className="flex-1">
              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 ${
                  isActive
                    ? `bg-gradient-to-r ${color} bg-clip-text text-transparent`
                    : "text-white"
                }`}
              >
                {experience.title}
              </h3>
              <p className="text-lg text-gray-300 font-medium mb-3">
                {experience.company}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{experience.location}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs w-fit ${
                    experience.type === "Full-time"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {experience.type}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {isActive && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="flex items-center gap-2 text-white font-semibold mb-3">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span>Key Achievements</span>
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} mt-2 flex-shrink-0`}
                      />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 bg-gradient-to-r ${color} bg-opacity-10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white hover:scale-110 transition-all cursor-pointer`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const sectionRef = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ml-4">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            My professional journey and impact in the tech industry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Timeline Section */}
          <div className="lg:col-span-2">
            <div className="relative max-w-none">
              {experiences.map((exp, idx) => (
                <TimelineItem
                  key={idx}
                  experience={exp}
                  index={idx}
                  isActive={activeExperience === idx}
                  onClick={setActiveExperience}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Stats and Skills Sidebar */}
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/10 sticky top-4">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                Career Highlights
              </h3>
              <div className="space-y-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </span>
                    <span
                      className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-400 to-cyan-400 bg-opacity-20 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white hover:scale-110 transition-all cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FadeIn Keyframe */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Experience;
