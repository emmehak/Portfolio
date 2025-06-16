import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Play,
  Star,
  Calendar,
  Code,
  Zap,
  Layers,
} from "lucide-react";
import portfolioImg from "./images/1.png";
import dashboardImg from "./images/6.jpg";
import fitnessImg from "./images/fitness.png";
import calculatorImg from "./images/5.png";
import advancedCalculatorImg from "./images/2.png";
import melodifyImg from "./images/4.png";
import galleryImg from "./images/3.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);
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

  useEffect(() => {
    setVisibleCount(3);
  }, [filter]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A professional website to showcase projects and skills with smooth animations and responsive design.",
      image: portfolioImg,
      category: "frontend",
      technologies: ["React", "Redux", "Tailwind", "Framer Motion"],
      features: [
        "Animated Sections",
        "Project Gallery",
        "Contact Form",
        "Dark Mode",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/emmehak/portfolio",
      status: "completed",
      year: "2025",
      color: "from-indigo-400 to-blue-400",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description:
        "Secure dashboard with analytics, role-based access, and custom reports for administrators.",
      image: dashboardImg,
      category: "fullstack",
      technologies: ["React", "Redux", "MongoDB", "Chart.js"],
      features: [
        "Real-Time Charts",
        "Access Control",
        "User Roles",
        "Dark Mode UI",
      ],
      liveUrl: "https://dynamic-praline-cf4130.netlify.app/login",
      githubUrl: "https://github.com/emmehak/admin-dashboard",
      status: "completed",
      year: "2025",
      color: "from-teal-400 to-cyan-400",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description:
        "Track workouts, calories, and goals with rich visuals and mobile-first experience.",
      image: fitnessImg,
      category: "frontend",
      technologies: ["React", "Material UI", "Rapid API"],
      features: [
        "Goal Tracking",
        "Workout Logs",
        "Push Notifications",
        "Data Visualization",
      ],
      liveUrl: "https://fitness-tracker-zeta-murex.vercel.app/",
      githubUrl: "https://github.com/emmehak/FitnessTracker",
      status: "completed",
      year: "2024",
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      title: "Scientific Calculator",
      description:
        "A responsive scientific calculator with basic math operations and a user-friendly interface.",
      image: calculatorImg,
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Scientific Calculator", "Math Operations"],
      liveUrl: "https://emmehak.github.io/Calculator/",
      githubUrl: "https://github.com/emmehak/Calculator",
      status: "completed",
      year: "2025",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 5,
      title: "Advanced Calculator",
      description:
        "A responsive advanced calculator app that includes a scientific calculator, a BMI calculator, and a standard calculator—all with a modern UI.",
      image: advancedCalculatorImg,
      category: "frontend",
      technologies: ["React", "BootStrap", "CSS", "JavaScript"],
      features: [
        "Scientific Calculator",
        "BMI Calculator",
        "Standard Arithmetic Operations",
        "Responsive Design",
      ],
      liveUrl: "https://silver-starburst-fb46a9.netlify.app/",
      githubUrl: "https://github.com/emmehak/AdvancedCalculator",
      status: "Completed",
      year: "2025",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 6,
      title: "Melodify - Music Player",
      description:
        "A responsive music player web app with sleek UI, real-time playback controls, and playlist support.",
      image: melodifyImg,
      category: "frontend",
      technologies: ["CSS", "JavaScript", "HTML5", "Napster API"],
      features: [
        "Responsive Design",
        "Audio Playback Controls",
        "Playlist Management",
        "Song Progress Bar",
      ],
      liveUrl: "https://emmehak.github.io/Melodify/",
      githubUrl: "https://github.com/emmehak/Melodify",
      status: "completed",
      year: "2025",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 7,
      title: "Photo Gallery",
      description:
        "A beautifully designed photo gallery app with responsive layout, image preview, and category-based filtering.",
      image: galleryImg,
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive Grid Layout",
        "Image Preview Modal",
        "Category Filters",
        "Hover Animations",
      ],
      liveUrl: "https://emmehak.github.io/photoGallery/",
      githubUrl: "https://github.com/emmehak/photoGallery",
      status: "completed",
      year: "2025",
      color: "from-pink-400 to-rose-400",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "fullstack", label: "Full Stack", icon: Code },
    { id: "frontend", label: "Frontend", icon: Star },
  ];

  const filteredProjectsFull =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filteredProjects = filteredProjectsFull.slice(0, visibleCount);

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Star className="w-4 h-4 text-green-400" />;
      case "in-progress":
        return <Play className="w-4 h-4 text-yellow-400" />;
      default:
        return <Code className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          My Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of recent work in full-stack development, UI design, and
          AI.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`group px-5 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${
              filter === id
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/80 border border-white/10 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative h-48 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-black/50 px-3 py-1 rounded-full text-sm flex items-center space-x-1 text-white">
                {getStatusIcon(project.status)}
                <span>{project.year}</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 hover:shadow-md transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-purple-200 rounded-full border border-white/10">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex space-x-3 pt-2">
                <a
                  href={project.liveUrl}
                  className={`px-4 py-2 rounded bg-gradient-to-r ${project.color} text-white text-sm transition-transform duration-300 hover:scale-105`}
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  className="px-4 py-2 rounded border border-white/20 text-gray-300 hover:bg-white/10 text-sm transition-transform duration-300 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredProjectsFull.length && (
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
    </section>
  );
};

export default Projects;
