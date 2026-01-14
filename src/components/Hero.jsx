import React, { useState, useEffect } from 'react'
import BookingModal from './BookingModal'

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroImages = [
    '/hero/1.jpg',
    '/hero/2.jpg',
    '/hero/3.jpg',
    '/hero/4.jpg',
    '/hero/5.jpg',
    '/hero/6.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Overlay */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl leading-none">
              EXPERIENCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                THE EXTRAORDINARY
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto font-light tracking-wide drop-shadow-md">
              Don’t find holidays to travel
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-12 hover:bg-red-700 active:scale-95 shadow-[0_0_20px_rgba(225,29,72,0.4)]"
            >
              <span className="relative z-10">Start Your Journey</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                →
              </span>
            </button>
            <button
              onClick={scrollToPackages}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg transition-all hover:bg-white/20 active:scale-95"
            >
              Explore Packages
            </button>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero
