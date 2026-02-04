import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from './BookingModal'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-4 md:px-8 py-4 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="navbar-logo">
            <Link to="/" className="no-underline flex items-center gap-2 md:gap-3">
              <div className="relative">
                <img 
                  src="/Vaiyari Icon Logo.jpg" 
                  alt="Vaiyari Logo" 
                  className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-full border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]" 
                />
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="m-0 text-xl md:text-2xl text-white font-black tracking-tighter">
                  VAIYARI 
                </span>   
                <span className="text-[8px] md:text-[10px] text-white font-bold tracking-widest uppercase mt-1 leading-none">
                  Don't find holidays to travel
                </span>
              </div>
            </Link>
          </div>
          <div className="navbar-toggle flex items-center gap-4 md:gap-6">
             <Link to="/" className="hidden md:block text-white hover:text-red-500 transition-colors font-medium">Home</Link>
            <Link to="/about" className="hidden md:block text-white hover:text-red-500 transition-colors font-medium">About Us</Link>
            <Link to="/contact" className="hidden md:block text-white hover:text-red-500 transition-colors font-medium">Contact</Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-4 md:px-6 py-2 bg-red-600 text-white rounded-full text-sm md:text-base font-bold transition-all hover:bg-red-700 active:scale-95 shadow-[0_0_15px_rgba(225,29,72,0.3)]"
            >
              <span className="relative z-10">Book Now</span>
            </button>
          </div>
        </div>
      </nav>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default Navbar
