import React from 'react'

const About = ({ darkMode }) => {
  return (
    <section
      id='about'
      className={`py-0 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <div className='text-center mb-12'>
          <h4 className={`text-3xl font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>About Me</h4>
          <h2 className={`text-2xl font-bold mt-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Know Me More</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12'>
          <div>
            <p className={`text-base md:text-lg font-normal leading-relaxed ${darkMode ? "text-white" : "text-gray-600"}`}>
              <span className='font-bold text-lg md:text-xl'>
                Hi, I'm Abhinay Sharma.
              </span>{' '}
              I am a Software Developer with a passion for building scalable
              and high-performance applications. Skilled in full-cycle development,
              API integration, and state management, I have worked on real-time chat,
              AI-powered features, Stripe payments, project management tools,
              and data visualization.
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

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          <div>
            <label className='font-medium text-gray-500'>Name:</label>
            <p className='font-semibold'>Abhinay Sharma</p>
          </div>
          <div>
            <label className='font-medium text-gray-500'>Email:</label>
            <p className='font-semibold'>abhinaysharma127@gmail.com</p>
          </div>
          <div>
            <label className='font-medium text-gray-500'>Date of Birth:</label>
            <p className='font-semibold'>16-09-1998</p>
          </div>
          <div>
            <label className='font-medium text-gray-500'>From:</label>
            <p className='font-semibold'>Farrukhabad (UP)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

