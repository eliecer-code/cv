import React from 'react'
import './App.css'
import Header from './sections/Header/Header'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Education from './sections/Education/Education'
import Projects from './sections/Projects/Projects'
import Habilities from './sections/Habilities/Habilities'
import Certificates from './sections/Certificate/Certificates'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-cv mx-auto px-6 py-12 md:py-20 space-y-20 animate-fade-in">
        <Header />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Habilities />
      </div>
    </div>
  )
}

export default App