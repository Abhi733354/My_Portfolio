import React from 'react'

const About = ({ darkMode }) => {
  return (
    <section
      id='about'
      className={`py-0 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className='max-w-6xl mx-auto px-6 md:px-6'>
        <div className='text-center mb-8 md:mb-6'>
          <h4 className={`text-xl md:text-lg font-medium  ${darkMode ? "text-white" : "text-gray-600"}`}>About Me</h4>
          <h2 className={`text-lg md:text-lg font-normal mt-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Know Me More</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 md:mb-8'>
          <div>
            <p className={`text-base md:text-base leading-normal font-normal ${darkMode ? "text-white" : "text-gray-600"}`}>
              <span className='font-medium text-base md:text-base'>
                Hi, I'm Abhinay Sharma.
              </span>{' '}
              I am a Software Developer with a passion for building scalable
              and high-performance applications. Skilled in full-cycle development,
              API integration, and state management, I have worked on real-time chat,
              AI-powered features, Stripe payments, project management tools, 
              invoice mnagement system, E-learning system, HR- management system and data visualization.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center bg-yellow-200 rounded-lg px-6 py-3 shadow-md'>
            <span className='bg-white text-yellow-600 text-lg font-medium w-18 h-18 flex items-center justify-center rounded-full shadow'>
              2.6
            </span>
            <div className='mt-3 text-gray-600 text-lg font-medium text-center'>
              Years of Experience
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:text-center'>
          <div>
            <label className='font-medium text-base text-gray-600'>Name:</label>
            <p className='font-normal text-base text-gray-800'>Abhinay Sharma</p>
          </div>
          <div>
            <label className='font-medium text-base text-gray-600'>Email:</label>
            <p className='font-normal text-base text-gray-800'>abhinaysharma127@gmail.com</p>
          </div>
          <div>
            <label className='font-medium text-base text-gray-600'>Date of Birth:</label>
            <p className='font-normal text-base text-gray-800'>16-09-1998</p>
          </div>
          <div>
            <label className='font-medium text-lg text-gray-600'>From:</label>
            <p className='font-normal text-base text-gray-800'>Farrukhabad (UP)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

