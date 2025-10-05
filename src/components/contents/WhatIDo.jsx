import React from 'react'

import reactLogo from "../../assets/images/react-logo-png-7.png"
import javascript from "../../assets/images/javascript.png"
import materialUI from "../../assets/images/materialUI.png"
import webDesign from "../../assets/images/web_design.jpg"
import webDevelopment from "../../assets/images/web_developement.webp"

const WhatIDo = ({ darkMode }) => {
    return (
        <section id='what-i-do' className='w-full flex item-center'>
            <div className='container mx-auto px-4 py-8'>
                <div className='text-center'>
                    <h4 className={`text-3xl md:text-3xl font-medium  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>What I Do</h4>
                    <h2 className={`text-2xl md:text-2xl font-bold mt-2 ${darkMode ? "bg-gray-900 text-white-100" : "bg-white text-gray-900"}`}>How Can I Help Your Organization</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-12'>
                    <div className={`card rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-500" : "bg-white"}`}>
                        <span className="block mb-4">
                            <img
                                src={reactLogo}
                                alt="React Icon"
                                className="w-40 h-40 mx-auto"
                            />
                        </span>
                        <h4 className={`text-xl font-semibold text-gray-800 mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>React JS</h4>
                        <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
                            I possess a deep understanding of React.js, leveraging its powerful
                            component-based architecture and state management to develop seamless
                            and interactive user interfaces.
                        </p>
                    </div>
                    <div className={`card rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-500" : "bg-white"}`}>
                        <span className="block mb-4">
                            <img
                                src={javascript}
                                alt="React Icon"
                                className="w-40 h-40 mx-auto"
                            />
                        </span>
                        <h4 className={`text-xl font-semibold text-gray-800 mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>React JS</h4>
                        <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
                            I possess a deep understanding of React.js, leveraging its powerful
                            component-based architecture and state management to develop seamless
                            and interactive user interfaces.
                        </p>
                    </div>
                    <div className={`card rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-500" : "bg-white"}`}>                        <span className="block mb-4">
                        <img
                            src={materialUI}
                            alt="React Icon"
                            className="w-40 h-40 mx-auto"
                        />
                    </span>
                        <h4 className={`text-xl font-semibold text-gray-800 mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>React JS</h4>
                        <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
                            I possess a deep understanding of React.js, leveraging its powerful
                            component-based architecture and state management to develop seamless
                            and interactive user interfaces.
                        </p>
                    </div>
                    <div className={`card rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-500" : "bg-white"}`}>                           <span className="block mb-4">
                        <img
                            src={webDevelopment}
                            alt="React Icon"
                            className="w-40 h-40 mx-auto"
                        />
                    </span>
                        <h4 className={`text-xl font-semibold text-gray-800 mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>React JS</h4>
                        <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
                            I possess a deep understanding of React.js, leveraging its powerful
                            component-based architecture and state management to develop seamless
                            and interactive user interfaces.
                        </p>
                    </div>
                    <div className={`card rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-500" : "bg-white"}`}>                        <span className="block mb-4">
                        <img
                            src={webDesign}
                            alt="React Icon"
                            className="w-40 h-40 mx-auto"
                        />
                    </span>
                        <h4 className={`text-xl font-semibold text-gray-800 mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>React JS</h4>
                        <p className={`text-sm font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
                            I possess a deep understanding of React.js, leveraging its powerful
                            component-based architecture and state management to develop seamless
                            and interactive user interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhatIDo

