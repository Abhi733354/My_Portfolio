import React from 'react'
//import Project1 from "../../assets/images/free-photo-of-city-in-rain.jpeg"
import Project1 from '../../assets/images/Project1.jpeg'
import { Link } from 'react-router-dom';


const Project = ({darkMode}) => {
  return (
    <section id='projects' className='h-screen flex  items-center'>
      <div className='w-full mx-auto px-12 py-8'>
        <div className='text-center'>
          <h4 className={`text-3xl md:text-3xl font-medium  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>Projects</h4>
          <h2 className={`text-2xl md:text-2xl font-bold mt-2 ${darkMode ? "bg-gray-900 text-white-100" : "bg-white text-gray-900"}`}>Some of my personal work</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full mx-auto mt-12'>
            <div className={`card rounded-lg shadow-md  text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}>
            <span className="block">
              <img
                src={Project1}
                alt="React Icon"
                className="w-100 h-60 mx-auto"
              />
            </span>
            <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-gray-900"}`}>
              <h4 className={`text-xl font-semibold ${darkMode ? "bg-gray-900 text-white-100 py-2" : "bg-white text-gray-800"}`}>React JS</h4>
              <p className={`text-sm font-normal leading-relaxed ${darkMode ? "bg-gray-900 text-white-100 px-3 py-2" : "bg-white text-gray-600"}`}>
                I possess a deep understanding of React.js, leveraging its powerful
                component-based architecture and state management to develop seamless
                and interactive user interfaces.
              </p>
            </div>
            <div className='bg-gray-700 p-3'>
              <div className='flex gap-5'>
                <Link
                  to="/live-preview"
                  className='text-start text-white text-sm font-normal hover:text-yellow-400 no-underline'
                >
                  Live Preview
                </Link>

                <Link
                  to="/get-code"
                  className='text-start text-white text-sm font-normal hover:text-yellow-400 no-underline'
                >
                  Get Code
                </Link>
              </div>
            </div>
          </div>

           <div className={`card rounded-lg shadow-md  text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}>
            <span className="block">
              <img
                src={Project1}
                alt="React Icon"
                className="w-100 h-60 mx-auto"
              />
            </span>
            <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-gray-900"}`}>
              <h4 className={`text-xl font-semibold ${darkMode ? "bg-gray-900 text-white-100 py-2" : "bg-white text-gray-800"}`}>React JS</h4>
              <p className={`text-sm font-normal leading-relaxed ${darkMode ? "bg-gray-900 text-white-100 px-3 py-2" : "bg-white text-gray-600"}`}>
                I possess a deep understanding of React.js, leveraging its powerful
                component-based architecture and state management to develop seamless
                and interactive user interfaces.
              </p>
            </div>
            <div className='bg-gray-700 p-3'>
              <div className='flex gap-5'>
                <Link
                  to="/live-preview"
                  className='text-start text-white text-sm font-normal hover:text-yellow-400 no-underline'
                >
                  Live Preview
                </Link>

                <Link
                  to="/get-code"
                  className='text-start text-white text-sm font-normal hover:text-yellow-400 no-underline'
                >
                  Get Code
                </Link>
              </div>
            </div>
          </div>

            <div className={`card rounded-lg shadow-md  text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}>
            <span className="block">
              <img
                src={Project1}
                alt="React Icon"
                className="w-100 h-60 mx-auto"
              />
            </span>
            <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-gray-900"}`}>
              <h4 className={`text-xl font-semibold ${darkMode ? "bg-gray-900 text-white-100 py-2" : "bg-white text-gray-800"}`}>React JS</h4>
              <p className={`text-sm font-normal leading-relaxed ${darkMode ? "bg-gray-900 text-white-100 px-3 py-2" : "bg-white text-gray-600"}`}>
                I possess a deep understanding of React.js, leveraging its powerful
                component-based architecture and state management to develop seamless
                and interactive user interfaces.
              </p>
            </div>
            <div className='bg-gray-700 p-3'>
              <div className='flex gap-5'>
                <Link
                  to="/live-preview"
                  className='text-start text-white text-sm font-normal hover:text-yellow-400 no-underline'
                >
                  Live Preview
                </Link>

                <Link
                  to="/get-code"
                  className='text-start text-white text-sm font-normal hover:text-yellow-400 no-underline'
                >
                  Get Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Project
