import React, { useState } from 'react'

import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import FaqPage from './pages/FaqPage/FaqPage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (pageName) => {
    setCurrentPage(pageName)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'faq':
        return <FaqPage />
      case 'auth':
        return <LoginPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app">
      <nav>
        <button onClick={() => navigate('home')}>Home</button>
        <button onClick={() => navigate('about')}>About</button>
        <button onClick={() => navigate('faq')}>FAQ</button>
        <button onClick={() => navigate('auth')}>Login</button>
      </nav>

      <main>{renderPage()}</main>
    </div>
  )
}

export default App
