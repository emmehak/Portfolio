import React, { useState } from "react";
import {
  ExternalLink,
  Award,
  Calendar,
  CheckCircle,
  Star,
  Shield,
} from "lucide-react";

const Certifications = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const certifications = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford Online + Deep Learning AI",
      date: "2025",
      status: "Completed",
      level: "Beginner",
      description:
        "A foundational course on machine learning concepts including supervised and unsupervised learning.",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Regression",
        "Clustering",
      ],
      link: "https://www.coursera.org/account/accomplishments/specialization/8EK58NLX94IT",
      color: "from-orange-400 to-yellow-500",
      icon: Shield,
    },
    {
      id: 2,
      title: "Intro to Software Engineering",
      issuer: "Coursera - IBM",
      date: "2024",
      status: "Completed",
      level: "Beginner",
      description:
        "Fundamentals of software development, including SDLC, testing, and maintenance.",
      skills: ["SDLC", "Testing", "Maintenance", "Documentation"],
      link: "https://www.coursera.org/account/accomplishments/verify/53TUSHHL7BYS",
      color: "from-blue-400 to-cyan-500",
      icon: Award,
    },
    {
      id: 3,
      title: "Version Control",
      issuer: "Coursera - IBM",
      date: "2025",
      status: "Completed",
      level: "Beginner",
      description:
        "Practical usage of Git and GitHub for source code management and collaboration.",
      skills: ["Git", "GitHub", "Branching", "Merging"],
      link: "https://www.coursera.org/account/accomplishments/verify/Z7YZT4NA3259",
      color: "from-cyan-400 to-blue-500",
      icon: CheckCircle,
    },
    {
      id: 4,
      title: "HTML, CSS, and JavaScript",
      issuer: "Coursera - IBM",
      date: "2024",
      status: "Completed",
      level: "Beginner",
      description:
        "Core web development skills to build static and interactive websites.",
      skills: ["HTML", "CSS", "JavaScript", "DOM"],
      link: "https://www.coursera.org/account/accomplishments/verify/AZHPTJUR4398",
      color: "from-green-400 to-emerald-500",
      icon: Star,
    },
    {
      id: 5,
      title: "React JS",
      issuer: "Coursera - IBM",
      date: "2025",
      status: "Completed",
      level: "Beginner",
      description:
        "Modern React development including hooks, context, and component architecture.",
      skills: ["React", "Hooks", "Context API", "JSX", "Redux"],
      link: "https://www.coursera.org/account/accomplishments/verify/OLGSSHS2G1HN",
      color: "from-green-500 to-teal-500",
      icon: Award,
    },
    {
      id: 6,
      title: "Tailwind CSS",
      issuer: "Scrimba",
      date: "2025",
      status: "Completed",
      level: "Begineer",
      description:
        "Utility-first CSS framework for designing responsive web interfaces efficiently.",
      skills: ["Tailwind", "Responsive Design", "Utility Classes"],
      link: "https://www.coursera.org/account/accomplishments/verify/FIJ4NKCCGR49",
      color: "from-blue-500 to-indigo-500",
      icon: Shield,
    },
    {
      id: 7,
      title: "Python",
      issuer: "Coursera - IBM",
      date: "2025",
      status: "Completed",
      level: "Beginner",
      description:
        "Python programming fundamentals including syntax, control structures, and libraries.",
      skills: ["Python", "Functions", "Loops", "Libraries"],
      link: "https://www.coursera.org/account/accomplishments/verify/Q6UHALRRFFMD",
      color: "from-yellow-400 to-red-400",
      icon: CheckCircle,
    },
    {
      id: 7,
      title: "Machine Learning",
      issuer: "Coursera - University of London",
      date: "2024",
      status: "Completed",
      level: "Beginner",
      description: "Machine Learning Basics",
      skills: ["Supervised Ml", "UnsupervisedML", "TensorFlow"],
      link: "https://www.coursera.org/account/accomplishments/verify/BL0OTZG49OJI",
      color: "from-yellow-400 to-red-400",
      icon: CheckCircle,
    },
  ];

  const handleCertificationClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-cyan-400"></div>
            <Award className="w-8 h-8 text-purple-400" />
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-purple-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise in modern
            technologies and development practices.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.slice(0, visibleCount).map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{
                  boxShadow:
                    hoveredCard === cert.id
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 60px rgba(147, 51, 234, 0.3)"
                      : "0 10px 25px -12px rgba(0, 0, 0, 0.25)",
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredCard(cert.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCertificationClick(cert.link)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} bg-opacity-20`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white`}
                    >
                      {cert.level}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <span className="font-medium">{cert.issuer}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">
                        {cert.status}
                      </span>
                    </div>

                    <div className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                      View Certificate →
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < certifications.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <span className="flex items-center space-x-2">
                <span>Load More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-full border border-white/10">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300">
              More certifications in progress
            </span>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
