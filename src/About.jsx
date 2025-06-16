import React, { useState, useEffect, useRef } from "react";
import { Code, Coffee, Heart, Zap } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code is my passion",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing for speed and user experience",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Designing with empathy and accessibility in mind",
      color: "from-pink-400 to-red-400",
    },
    {
      icon: Coffee,
      title: "Always Learning",
      description: "Staying updated with latest technologies and trends",
      color: "from-purple-400 to-indigo-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ml-2">
              Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="relative w-full h-64 sm:h-80 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center text-5xl sm:text-8xl font-bold text-white opacity-80">
                  Mehak Eman
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center text-xs sm:text-sm">
                <div className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                    1+
                  </div>
                  <div className="text-gray-400">Years Exp</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">
                    10+
                  </div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-pink-400">
                    100%
                  </div>
                  <div className="text-gray-400">Satisfaction</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 border-2 border-cyan-400 rotate-45 opacity-30 animate-spin-slow"></div>
            </div>
          </div>

          <div
            className={`space-y-6 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
              Passionate Developer &nbsp;
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block sm:inline">
                Creative Thinker
              </span>
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              I'm a full-stack developer with a passion for creating exceptional
              digital experiences. I transform complex problems into elegant
              solutions that users love.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center lg:text-left">
              My journey started with curiosity and became a career driven by
              innovation and continuous learning. I write clean code and design
              interfaces that are not just functional but delightful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-5 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                    hoveredCard === index
                      ? "shadow-lg shadow-purple-500/25"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-md sm:p-3 sm:rounded-lg bg-gradient-to-r ${item.color} bg-opacity-20 backdrop-blur-sm`}
                    >
                      <item.icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      item.color
                    } opacity-0 rounded-xl transition-opacity duration-300 ${
                      hoveredCard === index ? "opacity-5" : ""
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
