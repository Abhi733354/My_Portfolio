import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [activeLink, setActiveLink] = useState("home");


  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-lg transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="flex justify-between items-center px-6 md:px-12 md:py-4">
        <h1 className="text-l md:text-xl font-bold">PORTFOLIO</h1>

        <nav className="hidden md:flex gap-6">
          <a
            href="#home"
            onClick={() => setActiveLink("home")}
            className={`hover:text-yellow-400 transition ${
              activeLink === "home"
                ? "text-yellow-200 font-semibold"
                : darkMode
                ? "text-gray-300"
                : "text-gray-900"
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setActiveLink("about")}
            className={`hover:text-yellow-400 transition ${
              activeLink === "about"
                ? "text-yellow-200 font-semibold"
                : darkMode
                ? "text-gray-300"
                : "text-gray-900"
            }`}
          >
            About
          </a>

          <a
            href="#what-i-do"
            onClick={() => setActiveLink("what-i-do")}
            className={`hover:text-yellow-400 transition ${
              activeLink === "what-i-do"
                ? "text-yellow-200 font-semibold"
                : darkMode
                ? "text-gray-300"
                : "text-gray-900"
            }`}
          >
            What I Do
          </a>

          <a
            href="#resume"
            onClick={() => setActiveLink("resume")}
            className={`hover:text-yellow-400 transition ${
              activeLink === "resume"
                ? "text-yellow-200 font-semibold"
                : darkMode
                ? "text-gray-300"
                : "text-gray-900"
            }`}
          >
            Resume
          </a>

          <a
            href="#skills"
            onClick={() => setActiveLink("skills")}
            className={`hover:text-yellow-400 transition ${
              activeLink === "skills"
                ? "text-yellow-200 font-semibold"
                : darkMode
                ? "text-gray-300"
                : "text-gray-900"
            }`}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setActiveLink("projects")}
            className={`hover:text-yellow-400 transition ${
              activeLink === "projects"
                ? "text-yellow-400 font-semibold"
                : darkMode
                ? "text-gray-300"
                : "text-gray-900"
            }`}
          >
            Projects
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={` md:hidden flex flex-col items-center gap-4 transition-all duration-300 overflow-hidden 
          ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} 
          ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >

          <a href="#home" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#what-i-do" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>What I Do</a>
          <a href="#resume" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#skills" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Projects</a>

      </nav>
    </header>
  );
}

export default Header;
