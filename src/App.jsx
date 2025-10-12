import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Stats from './components/Stats'
import SignupForm from './components/SignupForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // 시스템 다크모드 감지
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('darkMode')
    
    if (stored) {
      setDarkMode(stored === 'true')
    } else {
      setDarkMode(isDark)
    }
  }, [])

  useEffect(() => {
    // 다크모드 적용
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Benefits />
      <Stats />
      <SignupForm />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

