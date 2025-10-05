import React from 'react'
import { Link } from 'react-router-dom'

const Resume = ({darkMode}) => {
    return (
        <section id='resume' className='h-screen  flex item-center'>
            <div className='container mx-auto px-4 py-8'>
            <div className='text-center'>
                <h4 className={`text-3xl md:text-3xl font-medium  ${darkMode ? "text-white" : "text-gray-600"}`}>Resume</h4>
                <h2 className={`text-2xl md:text-2xl font-bold mt-2 ${darkMode ? "text-white-100" : "ext-gray-900"}`}>A Summary of My Resume</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-9xl mt-5'>
                <div>
                    <h4 className={`font-bold text-xl font-bold  ${darkMode ? "text-white" : "text-gray-700"}`}>My Experience</h4>
                    <h4 className={`text-xl font-semibold  mt-2 ${darkMode ? "text-white" : "text-gray-700"}`}> Software Developer</h4>
                    <h4 className={`text-2sm font-normal  mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}> GetePay Pvt. Ltd. | June 2023 - Present</h4>
                    <div className=''>
                        <Link
                            to="/projects/bluesky"
                            className="flex items-center text-md:text-lg font-normal text-blue-600 mt-1 hover:underline">
                            <span className="mr-2 text-gray-500 w-4 h-4">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                            BlueSky Intel (AI & Blockchain Intelligence Platform)
                        </Link>
                        <p className={`text-base md:text-lg font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-700"}`}>
                            Independently handled the React-based portal of a multi-user platform connecting Business Users,
                            Solution Providers, and Investors. Integrated OpenAI APIs, Socket.io-powered real-time chat,
                            Kanban boards, and Stripe subscriptions with role-based access control.
                        </p>
                        <h4 className={`text-xl font-semibold mt-3 ${darkMode ? "text-white" : "text-gray-700"}`}>Tech Stack:</h4>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600">
                                JavaScript
                            </button>
                            <button className="bg-green-500 text-white py-2 px-2 rounded shadow hover:bg-green-600">
                                HTML
                            </button>
                            <button className="bg-yellow-400 text-gray-900 py-2 px-2 rounded shadow hover:bg-yellow-500">
                                CSS
                            </button>
                            <button className="bg-cyan-500 text-white py-2 px-2 rounded shadow hover:bg-cyan-600">
                                React JS
                            </button>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Link
                            to="/projects/bluesky"
                            className="flex items-center text-md:text-lg font-normal text-blue-600 mt-1 hover:underline">
                            <span className="mr-2 text-gray-500 w-4 h-4">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                            BlueSky Intel (AI & Blockchain Intelligence Platform)
                        </Link>
                        <p className={`text-base md:text-lg font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-700"}`}>
                            Independently handled the React-based portal of a multi-user platform connecting Business Users,
                            Solution Providers, and Investors. Integrated OpenAI APIs, Socket.io-powered real-time chat,
                            Kanban boards, and Stripe subscriptions with role-based access control.
                        </p>
                        <h4 className={`text-xl font-semibold mt-3 ${darkMode ? "text-white" : "text-gray-700"}`}>Tech Stack:</h4>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600">
                                JavaScript
                            </button>
                            <button className="bg-green-500 text-white py-2 px-2 rounded shadow hover:bg-green-600">
                                HTML
                            </button>
                            <button className="bg-yellow-400 text-gray-900 py-2 px-2 rounded shadow hover:bg-yellow-500">
                                CSS
                            </button>
                            <button className="bg-cyan-500 text-white py-2 px-2 rounded shadow hover:bg-cyan-600">
                                React JS
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className={`font-bold text-xl font-bold ml-6 ${darkMode ? "text-white" : "text-gray-700"}`}>My Education</h4>
                    <div className='ml-6 max-w-md border-l-3 border-yellow-200 pl-3'>
                        <h4 className={`text-xl font-semibold mt-2 ${darkMode ? "text-white" : "text-gray-700"}`}>Full Stack Wed Developement</h4>
                        <h4 className={`text-sm font-normal  mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>Newton School Pvt. Ltd.| Nov 2022 - May 2023</h4>
                        <h4 className={`text-sm font-normal  mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>GetePay Pvt. Ltd. | June 2023 - Present</h4>

                    </div>
                    <div className='ml-6 max-w-md border-l-3 border-yellow-200 pl-3 mt-5'>
                        <h4 className={`text-xl font-semibold mt-2 ${darkMode ? "text-white" : "text-gray-700"}`}>Bachelor In Technology</h4>
                        <h4 className={`text-sm font-normal mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>Rajasthan Technical University | Aug 2016 - June2020</h4>
                        <h4 className={`text-sm font-normal mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>Completed With 70%</h4>
                    </div>
                    <div className='ml-6 max-w-md border-l-3 border-yellow-200 pl-3 mt-5'>
                        <h4 className={`text-xl font-semibold mt-2 ${darkMode ? "text-white" : "text-gray-700"}`}>XII Class</h4>
                        <h4 className={`text-sm font-normal  mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>SP Public School | July 2014 - June2015</h4>
                        <h4 className={`text-sm font-normal  mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>Completed With 73%</h4>
                    </div>
                    <div className='ml-6 max-w-md border-l-3 border-yellow-200 pl-3 mt-5'>
                        <h4 className={`text-xl font-semibold mt-2 ${darkMode ? "text-white" : "text-gray-700"}`}>X Class</h4>
                        <h4 className={`text-sm font-normal  mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>SP Public School | July 2012 - June2013</h4>
                        <h4 className={`text-sm font-normal  mt-1 ${darkMode ? "text-white" : "text-gray-700"}`}>Completed With 77%</h4>
                    </div>

                </div>
            </div>
            </div>
        </section>

    )
}

export default Resume
