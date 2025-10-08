import React from 'react'

import reactLogo from "../../assets/images/react-logo-png-7.png"
import javascript from "../../assets/images/javascript.png"
import materialUI from "../../assets/images/materialUI.png"
import webDesign from "../../assets/images/web_design.jpg"
import webDevelopment from "../../assets/images/web_developement.webp"

const WhatIDo = ({ darkMode }) => {
  return (
    <section
      id='what-i-do'
      className={`py-0 px-6 md:px-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-6 md:mb-12'>
          <h4 className={`text-2xl md:text-3xl font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>
            What I Do
          </h4>
          <h2 className={`text-xl md:text-2xl font-bold mt-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
            How Can I Help Your Organization
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {/* React JS */}
          <div className={`rounded-lg shadow-md p-6 text-center hover:shadow-xl transition ${
            darkMode ? "bg-gray-900 border border-gray-600" : "bg-white"
          }`}>
            <img src={reactLogo} alt="React Icon" className="w-32 h-32 mx-auto mb-4" />
            <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
              React JS
            </h4>
            <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
              I possess a deep understanding of React.js, leveraging its powerful
              component-based architecture and state management to develop seamless
              and interactive user interfaces.
            </p>
          </div>

          {/* JavaScript */}
          <div className={`rounded-lg shadow-md p-6 text-center hover:shadow-xl transition ${
            darkMode ? "bg-gray-900 border border-gray-600" : "bg-white"
          }`}>
            <img src={javascript} alt="JavaScript Icon" className="w-32 h-32 mx-auto mb-4" />
            <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
              JavaScript
            </h4>
            <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
            I am a JavaScript expert with a deep understanding of the language and its ecosystem. Proficient in both front-end
            and back-end development, I have a proven track record of building dynamic and interactive web applications.  
            </p>
          </div>

          {/* Material UI */}
          <div className={`rounded-lg shadow-md p-6 text-center hover:shadow-xl transition ${
            darkMode ? "bg-gray-900 border border-gray-600" : "bg-white"
          }`}>
            <img src={materialUI} alt="Material UI Icon" className="w-32 h-32 mx-auto mb-4" />
            <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Material UI
            </h4>
            <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
              I am a proficient front-end developer with expertise in Material-UI, a popular React UI component library.
               With a deep understanding of Material Design principles,
               I create visually appealing and intuitive user interfaces.
            </p>
          </div>

          {/* Web Development */}
          <div className={`rounded-lg shadow-md p-6 text-center hover:shadow-xl transition ${
            darkMode ? "bg-gray-900 border border-gray-600" : "bg-white"
          }`}>
            <img src={webDevelopment} alt="Web Development" className="w-32 h-32 mx-auto mb-4" />
            <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Web Development
            </h4>
            <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
         I am a highly skilled web developer proficient in various web development technologies.
          My strong problem-solving skills enable me to deliver exceptional results.s.
            </p>
          </div>

          {/* Web Design */}
          <div className={`rounded-lg shadow-md p-6 text-center hover:shadow-xl transition ${
            darkMode ? "bg-gray-900 border border-gray-600" : "bg-white"
          }`}>
            <img src={webDesign} alt="Web Design" className="w-32 h-32 mx-auto mb-4" />
            <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Web Design
            </h4>
            <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
            have a strong background in web design, combining creativity 
            and technical skills to deliver visually stunning and user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo


