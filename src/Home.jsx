import React, { useState, useEffect } from "react";
import {
  Download,
  Eye,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Sparkles,
} from "lucide-react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Expert",
  "UI/UX Enthusiast",
  "Problem Solver",
];

const Home = ({ setActiveSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const updateMouse = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setTextIndex((prev) => (prev + 1) % roles.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mehak-Eman-Resume.pdf";
    link.download = "Mehak-Eman-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewCV = () => {
    window.open("/Mehak-Eman-Resume.pdf", "_blank");
  };

  const scrollToAbout = () => {
    setActiveSection("about");
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/emmehak",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mehak-eman-2a229a24a/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },

    {
      icon: Mail,
      href: "mailto:em.mehak04@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects" },
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Technologies" },
  ];

  const floatIcons = [Code, Github, Sparkles];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * 0.008}px, ${
                mousePosition.y * 0.008
              }px)`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Text Section */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
                <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                <span className="text-sm md:text-base font-medium">
                  Hello, I'm
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-gradient-x">
                Mehak Eman
              </h1>
            </div>

            <div className="relative h-16 md:h-20 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300">
                I'm a{" "}
                <span
                  className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold transition-all duration-500"
                  key={textIndex}
                >
                  {roles[textIndex]}
                </span>
              </h2>
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-400 ml-2 animate-pulse" />
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Passionate about creating exceptional digital experiences through
              clean code, innovative design, and cutting-edge technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto lg:mx-0">
              {stats.map(({ number, label }, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={downloadCV}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </span>
              </button>
              <button
                onClick={viewCV}
                className="group px-6 md:px-8 py-3 md:py-4 border-2 border-purple-400 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
              >
                <span className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
                  <span>View CV</span>
                </span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="group p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all hover:scale-125 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative flex items-center justify-center">
            <div
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
              style={{
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 0.01
                }deg) rotateY(${mousePosition.x * 0.01}deg)`,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 opacity-30 animate-spin-slow blur-sm"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-40 animate-reverse-spin blur-sm"></div>
              <div className="absolute inset-12 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center justify-center p-8">
                <div className="relative mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1 animate-pulse">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-white font-bold text-2xl md:text-3xl flex items-center justify-center">
                        ME
                      </div>
                    </div>
                  </div>
                  {floatIcons.map((Icon, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white animate-float"
                      style={{
                        top: i === 0 ? "-10px" : i === 1 ? "50%" : "auto",
                        bottom: i === 2 ? "-10px" : "auto",
                        left: i === 1 ? "-20px" : "auto",
                        right: i === 0 || i === 2 ? "-20px" : "auto",
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">
                    Available for work
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Sialkot, Pakistan</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-bounce opacity-60"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-all hover:scale-110 z-20"
      >
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm font-medium hidden sm:block">
            Scroll Down
          </span>
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </button>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: left center;
          }
          50% {
            background-position: right center;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
