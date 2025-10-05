import React from 'react'

const About = ({darkMode}) => {
    console.log(darkMode, "kdjkldkl")
    return (
        <main className= {`h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white"}`}>
        <section id='about' className='w-full'>
            <div className='container mx-auto px-4 py-8'>
                <div className='text-center'>
                    <h4 className={`text-3xl md:text-3xl font-medium  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>About Me</h4>
                    <h2 className={`text-2xl md:text-2xl font-bold mt-2 ${darkMode ? "bg-gray-900 text-white-100" : "bg-white text-gray-900"}`}>Know Me More</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full my-12'>
                    <div>
                        <p className={`text-base md:text-lg font-normal leading-relaxed ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}` }>
                            <span className= {`font-bold text-lg md:text-xl  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
                                Hi, I'm Abhinay Sharma.
                            </span>{' '}
                            I am a Software Developer with a passion for building scalable
                            and high-performance applications. Skilled in full-cycle development,
                            API integration, and state management, I have worked on real-time chat,
                            AI-powered features, Stripe payments, project management tools,
                            and data visualization. With strong problem-solving and collaboration skills,
                            I thrive on tackling challenges and delivering impactful solutions.
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center bg-yellow-200 rounded-lg p-6 shadow-md'>
                        <span className='bg-white text-yellow-600 text-4xl font-bold w-24 h-24 flex items-center justify-center rounded-full shadow'>
                            2.6
                        </span>
                        <div className='mt-3 text-gray-800 text-lg font-medium text-center'>
                            Years of Experience
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full'>
            <div className='container mx-auto px-4 py-8'>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-12">
                    <div>
                        <label className={`font-medium ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>Name:</label>
                        <p className={`font-semibold ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>Abhinay Sharma</p>
                    </div>

                    <div>
                        <label className={`font-medium ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>Email:</label>
                        <p className={`font-semibold ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>abhinaysharma127@gmail.com</p>
                    </div>

                    <div>
                        <label className={`font-medium ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>Date of Birth:</label>
                        <p className={`font-semibold ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>16-09-1998</p>
                    </div>

                    <div>
                        <label className={`font-medium ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>From:</label>
                        <p className={`font-semibold ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>Farrukhabad (UP)</p>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}

export default About
