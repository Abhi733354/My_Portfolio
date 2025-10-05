import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ darkMode}) => {
    console.log(darkMode, "darkmode")
    return (
        <footer className= {`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <div className={`w-full mx-auto px-12 py-8  ${darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-gray-700"}`}>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full mx-auto mt-12'>
                    <div className='text-start'>
                        <h4 className='font-bold text-xl font-bold'>Let's get in touch </h4>
                        <p className="text-base md:text-lg font-normal leading-relaxed mt-3 max-w-md">
                            I enjoy discussing new projects and design challenges. Please share as much
                            info as possible so we can get the most out of our first catch-up.
                        </p>

                        <h4 className='text-base md:text-lg font-normal leading-relaxed mt-3'>
                            Living In:
                        </h4>
                        <p className='text-base md:text-lg font-normal  leading-relaxed'>
                            Jaipur, Rajasthan
                        </p>
                        <h4 className='text-base md:text-lg font-normal  leading-relaxed mt-3'>
                            Contact:
                        </h4>
                        <p className='text-base md:text-lg font-normal  leading-relaxed'>
                            (+91) 6387436672
                        </p>

                        <div className='flex items-center gap-3 mt-3'>
                            <a
                                href="https://www.linkedin.com/in/abhinay-sharma127/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <svg
                                    className="w-8 h-8 fill-black hover:fill-yellow-400 transition-colors"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Abhi733354"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <svg className="w-8 h-8 fill-black hover:fill-yellow-400 transition-colors" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon">
                                    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27">
                                    </path>
                                </svg>
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <svg className="w-8 h-8 fill-black hover:fill-yellow-400 transition-colors" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z">
                                </path>
                                </svg>
                            </a>

                            <a
                                href="https://abhinaysharma127@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                <svg className="w-8 h-8 fill-black hover:fill-yellow-400 transition-colors" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MailOutlineIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z">
                                </path>
                                </svg>
                            </a>
                        </div>


                    </div>
                    <div className='text-start'>
                        <h4 className='font-bold text-xl mb-4'>
                            Estimate your next project
                        </h4>

                        <form className='space-y-4 max-w-md'>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter Your Name'
                                    className='w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-700 placeholder-gray-400'
                                />
                            </div>

                            <div>
                                <input
                                    type='email'
                                    placeholder='Enter Your Email'
                                    className='w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-700 placeholder-gray-400'
                                />
                            </div>

                            <div>
                                <textarea
                                    placeholder='How Can I Help You?'
                                    rows='4'
                                    className='w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-700 placeholder-gray-400 resize-none'
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='flex items-center justify-center gap-2 w-full bg-yellow-400 text-gray-800 font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-colors'
                                >
                                    Send
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={2}
                                        stroke='currentColor'
                                        className='w-5 h-5'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M17.25 8.25L21 12l-3.75 3.75M21 12H3'
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            <div className={`flex justify-around py-5  ${darkMode ? "bg-gray-900 text-white" : "bg-black text-gray-700"}`}>
                <p className="text-start text-white flex items-center justify-aound gap-2">
                    Designed By
                    <span className="font-semibold text-yellow-400">Abhinay Sharma</span>
                    with
                    <svg
                        className="w-5 h-5 fill-red-500 hover:fill-yellow-400 transition-colors"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </p>

                 <p className="text-start text-white flex items-center justify-aound gap-2">
                    @ 2025 
                    <span className="font-semibold text-yellow-400">Abhinay.</span>
                    All Right Reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer
