import React from 'react'

const Skills = ({darkMode}) => {
  return (
    <section id='skills' className='h-screen flex items-center'>
      <div className='w-full mx-auto px-12 py-8'>
        <div className='text-center'>
          <h4 className={`text-3xl md:text-3xl font-medium  ${darkMode ? "text-white" : "text-gray-600"}`}>My Skills</h4>
        </div>

        {/* ✅ Use grid with full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
          <div>
            <h4 className={`mb-3 text-xl font-semibold  ${darkMode ? "text-white" : "text-gray-700"}`}>Web Design (70%)</h4>
            <div className="w-full h-2 bg-white rounded-full">
              <div
                className="h-2 bg-yellow-300 rounded-full"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>

          <div>
            <h4 className={`mb-3 text-xl font-semibold  ${darkMode ? "text-white" : "text-gray-700"}`}>Web Design (70%)</h4>
            <div className="w-full h-2 bg-white rounded-full">
              <div
                className="h-2 bg-yellow-300 rounded-full"
                style={{ width: '95%' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-full">
          <div>
            <h4 className={`mb-3 text-xl font-semibold  ${darkMode ? "text-white" : "text-gray-700"}`}>Web Design (70%)</h4>
            <div className="w-full h-2 bg-white rounded-full">
              <div
                className="h-2 bg-yellow-300 rounded-full"
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>

          <div>
            <h4 className={`mb-3 text-xl font-semibold  ${darkMode ? "text-white" : "text-gray-700"}`}>Web Design (70%)</h4>
            <div className="w-full h-2 bg-white rounded-full">
              <div
                className="h-2 bg-yellow-300 rounded-full"
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-full">
          <div>
            <h4 className={`mb-3 text-xl font-semibold  ${darkMode ? "text-white" : "text-gray-700"}`}>Web Design (70%)</h4>
            <div className="w-full h-2 bg-white rounded-full">
              <div
                className="h-2 bg-yellow-300 rounded-full"
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>

          <div>
            <h4 className={`mb-3 text-xl font-semibold  ${darkMode ? "text-white" : "text-gray-700"}`}>Web Design (70%)</h4>
            <div className="w-full h-2 bg-white rounded-full">
              <div
                className="h-2 bg-yellow-300 rounded-full"
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
