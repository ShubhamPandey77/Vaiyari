import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloating from './components/WhatsAppFloating'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
        <Footer />
        <WhatsAppFloating />
      </div>
    </Router>
  )
}

export default App
