import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`w-full transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-gray-900"}`}>
      <div className={`max-w-6xl mx-auto px-6 md:px-12 py-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xl font-bold">Let's get in touch</h4>
            <p className="text-base md:text-lg leading-relaxed max-w-md">
              I enjoy discussing new projects and design challenges. Please share as much
              info as possible so we can get the most out of our first catch-up.
            </p>

            <div className="space-y-2">
              <p><strong>Living In:</strong> Jaipur, Rajasthan</p>
              <p><strong>Contact:</strong> (+91) 6387436672</p>
            </div>

            <div className="flex items-center gap-4 mt-3">
              {/* Social Icons */}
              <a href="https://www.linkedin.com/in/abhinay-sharma127/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                {/* LinkedIn SVG */}
              </a>
              <a href="https://github.com/Abhi733354" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                {/* GitHub SVG */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                {/* Instagram SVG */}
              </a>
              <a href="mailto:abhinaysharma127@gmail.com" className="hover:text-yellow-400 transition">
                {/* Mail SVG */}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-xl text-gray-900 font-bold mb-4">Estimate your next project</h4>
            <form className="space-y-4 max-w-md">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 
             focus:outline-none focus:ring-1 focus:ring-yellow-400 
             focus:border-yellow-300 text-gray-700 placeholder-gray-400"
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 
             focus:outline-none focus:ring-1 focus:ring-yellow-400 
             focus:border-yellow-300 text-gray-700 placeholder-gray-400"
              />

              <textarea
                placeholder="How Can I Help You?"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 
             focus:outline-none focus:ring-1 focus:ring-yellow-400 
             focus:border-yellow-300 text-gray-700 placeholder-gray-400 resize-none"
              />

              <button type="submit" className={`w-full flex items-center justify-center gap-2 bg-yellow-300 text-gray-800 font-semibold py-2 rounded-lg shadow-md  hover:text-white transition-colors ${darkMode ? "text-white hover:bg-yellow-600 " : "hover:bg-yellow-600"}`}>
                Send
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`flex flex-col md:flex-row justify-between items-center py-5 px-6 md:px-12 border-t border-gray-700 ${darkMode ? "bg-gray-900 text-white" : "bg-black text-gray-700"}`}>
        <p className="flex items-center gap-2 text-sm">
          Designed By <span className="font-semibold text-yellow-200">Abhinay Sharma</span> with ❤️
        </p>
        <p className="flex items-center gap-2 text-sm mt-2 md:mt-0">
          @2025 <span className="font-semibold text-yellow-200">Abhinay.</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
