import React from 'react'
import { Link } from 'react-router-dom'

const Resume = ({ darkMode }) => {
  return (
    <section
      id="resume"
      className={`pb-16 px-6 md:px-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-6 md:mb-6'>
          <h4 className={`text-xl md:text-lg font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>
            Resume
          </h4>
          <h2 className={`text-lg md:text-lg font-normal mt-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
            A Summary of My Resume
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
          <div>
            <h4 className={`text-lg md:text-lg font-medium mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}>
              My Experience
            </h4>

            {/* Experience Item */}
            <div className='border-l-3 border-blue-500 pl-3 space-y-1'>
              <h4 className={`text-base md:text-base font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>
                Software Developer
              </h4>
              <h4 className={`text-base md:text-base font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                GetePay Pvt. Ltd. | June 2023 - Present
              </h4>
              <div>
                <Link
                  to="https://www.blueskyintel.com/login"
                  className="flex items-center text-blue-600 hover:underline text-base font-normal"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 text-base font-normal"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  BlueSky Intel (AI & Blockchain Intelligence Platform)
                </Link>
                <p className={`text-base md:text-base leading-normal font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Independently handled the React-based portal of a multi-user platform connecting
                  Business Users, Solution Providers, and Investors. Integrated OpenAI APIs,
                  Socket.io-powered real-time chat, Kanban boards, and Stripe subscriptions
                  with role-based access control.
                </p>
                <h4 className={`text-base font-medium mt-2 ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="bg-blue-500 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out">
                    React Js
                  </button>

                  <button className="bg-green-500 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
                    Redux ToolKit
                  </button>

                  <button className="bg-yellow-400 text-white text-sm font-normal py-2 px-4 rounded-lg shadow border border-yellow-400 hover:bg-yellow-500 transition duration-300 ease-in-out">
                    Material-UI
                  </button>

                  <button className="bg-cyan-500 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-cyan-500 hover:bg-cyan-600 transition duration-300 ease-in-out">
                    OpenAI API
                  </button>

                  <button className="bg-green-500 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
                    socket.io
                  </button>

                  <button className="bg-blue-500 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out">
                    stripe
                  </button>

                  <button className="bg-yellow-400 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-yellow-400 hover:bg-yellow-500 transition duration-300 ease-in-out">
                    nest.js
                  </button>
                </div>

              </div>

              {/* project link 2 */}

              <div className='mt-3'>
                <Link
                  to="https://weteams.ai/#/"
                  className="flex items-center text-blue-600 hover:underline text-base font-normal"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 text-base font-normal"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  WeTeams (Project & Resource Management Tool)
                </Link>
                <p className={`text-base md:text-base leading-normal font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Developed a smart project management platform with React.js, Redux Toolkit, and RTK Query.
                  Refactored codebase and integrated Jira and Asana APIs to track employee hours, sprint progress,
                  and resource allocation. Empowered managers with actionable reports and team performance insights.
                </p>
                <h4 className={`text-base font-medium mt-2 ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="bg-blue-500 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out">
                    React Js
                  </button>

                  <button className="bg-green-500 text-white text-sm font-normal py-2 px-2 rounded-lg shadow border border-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
                    Redux ToolKit
                  </button>

                  <button className="bg-yellow-400 text-white text-sm font-normal py-2 px-4 rounded-lg shadow border border-yellow-400 hover:bg-yellow-500 transition duration-300 ease-in-out">
                    Material-UI
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className={`text-lg md:text-lg font-medium mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}>
              My Education
            </h4>

            <div className='border-l-3 border-yellow-200 pl-3 space-y-5'>
              <div>
                <h4 className={`text-base md:text-base font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Full Stack Web Development
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Newton School Pvt. Ltd.| Nov 2022 - May 2023
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  GetePay Pvt. Ltd. | June 2023 - Present
                </h4>
              </div>

              <div>
                <h4 className={`text-base md:text-base font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Bachelor In Technology
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Rajasthan Technical University | Aug 2016 - June 2020
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Completed With 70%
                </h4>
              </div>

              <div>
                <h4 className={`text-base md:text-base font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>
                  XII Class
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  SP Public School | July 2014 - June 2015
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Completed With 73%
                </h4>
              </div>

              <div>
                <h4 className={`text-base md:text-base font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>
                  X Class
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  SP Public School | July 2012 - June 2013
                </h4>
                <h4 className={`text-sm font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
                  Completed With 77%
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

