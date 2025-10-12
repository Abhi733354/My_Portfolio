import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-yellow-200 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* 📨 Contact Info */}
        <div className="space-y-3">
          <h4 className="text-xl md:text-lg font-semibold">Let's get in touch</h4>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            I enjoy discussing new projects and design challenges. Please share
            as much info as possible so we can get the most out of our first
            catch-up.
          </p>

          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Living In:</strong> Jaipur, Rajasthan
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Contact:</strong> (+91) 6387436672
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-3 text-gray-700 dark:text-gray-300">
            <a href="https://www.linkedin.com/in/abhinay-sharma127/" target="_blank" rel="noopener noreferrer"
               className="hover:text-yellow-400 transition transform hover:scale-110">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Abhi733354" target="_blank" rel="noopener noreferrer"
               className="hover:text-yellow-400 transition transform hover:scale-110">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-yellow-400 transition transform hover:scale-110">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="mailto:abhinaysharma127@gmail.com"
               className="hover:text-yellow-400 transition transform hover:scale-110">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h4 className="text-xl md:text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* ⚙️ Skills / Tech Stack */}
        <div>
          <h4 className="text-xl md:text-lg font-semibold mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "React Js",
              "Tailwind CSS",
              "Bootstrap",
              "Redux",
              "JavaScript",
              "Node.js",
              "MongoDB",
              "Express Js",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-yellow-400  text-gray-600 px-2 py-2 rounded-lg text-sm font-medium dark:bg-gray-800 dark:text-yellow-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ⏰ Availability */}
        <div>
          <h4 className="text-xl md:text-lg font-semibold mb-4">Availability</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Open for freelance projects and collaborations.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Available:</strong> Mon – Fri, 9:00 AM – 6:00 PM
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
          >
            Let's Connect
          </Link>
        </div>
      </div>

      {/* 🧾 Footer Bottom */}
      <div
        className={`flex flex-col md:flex-row justify-between items-center py-5 px-6 md:px-12 border-t ${
          darkMode
            ? "border-gray-700 bg-gray-900 text-white"
            : "border-gray-300 bg-yellow-100 text-gray-700"
        }`}
      >
        <p className="flex items-center gap-2 text-sm">
          Designed By{" "}
          <span className="font-semibold text-yellow-500">Abhinay Sharma</span> with ❤️
        </p>
        <p className="text-sm mt-2 md:mt-0">
          © 2025 <span className="font-semibold text-yellow-500">Abhinay</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
