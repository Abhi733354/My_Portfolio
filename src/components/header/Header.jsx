import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-lg transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="flex justify-between items-center px-6 md:px-12 md:py-4">
        <h1 className="text-l md:text-xl font-bold">PORTFOLIO</h1>

        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#what-i-do" className="hover:text-yellow-400 transition">What I Do</a>
          <a href="#resume" className="hover:text-yellow-400 transition">Resume</a>
          <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
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
