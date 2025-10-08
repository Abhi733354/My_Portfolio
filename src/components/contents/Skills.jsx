import React from 'react'

const Skills = ({ darkMode }) => {
  return (
    <section id='skills' className={`px-6 md:px-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-6 md:mb-12'>
          <h4 className={`text-2xl md:text-3xl font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>My Skills</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{ name: "Web Design", percent: "70%" }, { name: "Web Development", percent: "95%" }, { name: "UI/UX", percent: "80%" }, { name: "React JS", percent: "85%" }, { name: "CSS", percent: "75%" }, { name: "JavaScript", percent: "85%" }].map((skill, idx) => (
            <div key={idx}>
              <h4 className={`mb-3 text-xl font-semibold ${darkMode ? "text-white" : "text-gray-700"}`}>
                {skill.name} ({skill.percent})
              </h4>
              <div className="w-full h-2 bg-white rounded-full">
                <div
                  className="h-2 bg-yellow-200 rounded-full"
                  style={{ width: skill.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

