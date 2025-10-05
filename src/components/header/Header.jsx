import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full z-50 flex flex-col backdrop-blur-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="header-container flex justify-between items-center px-6 py-3">
        <h1 className="header-logo font-bold text-xl">PORTFOLIO</h1>
   <nav className="header-nav hidden md:flex gap-4">
  <a href="#home" className="header-link hover:text-yellow-400">Home</a>
  <a href="#about" className="header-link hover:text-yellow-400">About</a>
  <a href="#what-i-do" className="header-link hover:text-yellow-400">What I Do</a>
  <a href="#resume" className="header-link hover:text-yellow-400">Resume</a>
  <a href="#skills" className="header-link hover:text-yellow-400">Skills</a>
  <a href="#projects" className="header-link hover:text-yellow-400">Projects</a>
</nav>



        <div className="header-actions flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌙' : '☀️'}
          </button>

       

         <button 
  onClick={() => setMenuOpen(!menuOpen)} 
  className="block md:hidden text-3xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
>
  ☰
</button>

        </div>
      </div>

   <nav
  className={`mobile-nav flex flex-col items-center gap-4 py-4 md:hidden 
    ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} 
    shadow-md transition-all duration-300 overflow-hidden 
    ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
>
  <Link to="/" className="header-link" onClick={() => setMenuOpen(false)}>Home</Link>
  <Link to="/about" className="header-link" onClick={() => setMenuOpen(false)}>About</Link>
  <Link to="/what-i-do" className="header-link" onClick={() => setMenuOpen(false)}>My Work</Link>
  <Link to="/projects" className="header-link" onClick={() => setMenuOpen(false)}>Projects</Link>
  <Link to="/contact" className="header-link" onClick={() => setMenuOpen(false)}>Contact</Link>
</nav>

    </header>
  )
}

export default Header
