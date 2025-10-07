import React from 'react'
import Content1 from '../contents/Content1'
import About from '../contents/About'
import WhatIDo from '../contents/WhatIDo'
import Resume from '../contents/Resume'
import Skills from '../contents/Skills'
import Project from '../contents/Project'

const HomePage = ({ darkMode }) => {
  return (
    <div className="space-y-16"> {/* spacing between each section */}
      <Content1 darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <WhatIDo darkMode={darkMode}/>
      <Resume darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Project darkMode={darkMode}/>
    </div>
  )
}

export default HomePage

