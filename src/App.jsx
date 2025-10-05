import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/Footer'

import HomePage from './components/homePage/HomePage'

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default App
