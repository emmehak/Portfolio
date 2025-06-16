import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    "home",
    "about",
    "skills",
    "certifications",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 border border-purple-400 rotate-45 opacity-20 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-cyan-400 rotate-12 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${
              scrollY * 0.1
            }deg)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative z-10">
        <Home setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 z-50 origin-left transform scale-x-0 animate-pulse">
        <div
          className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 transition-transform duration-150 ease-out origin-left"
          style={{
            transform: `scaleX(${Math.min(
              scrollY /
                (document.documentElement.scrollHeight - window.innerHeight),
              1
            )})`,
          }}
        />
      </div>
    </div>
  );
};

export default App;
