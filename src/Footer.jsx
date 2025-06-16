import React from "react";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  Coffee,
} from "lucide-react";

const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Mehak Eman
              </h3>
              <p className="text-gray-400 text-sm">
                Full Stack Developer crafting digital experiences
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`group p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 ${color} transform transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 Mehak Eman.</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="group flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 border border-white/10 rounded-full text-gray-400 hover:text-white transform transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-gradient-x"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
