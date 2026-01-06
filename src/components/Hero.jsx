import React from 'react'

function Hero() {
  return (
    <section className="h-[80vh] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center flex justify-center items-center text-center text-white p-4">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Explore the World with Vaiyari</h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">Unforgettable group travel experiences tailored for you. Since November 2025.</p>
        <div className="flex justify-center gap-4">
          <button className="btn-primary px-8 py-3 text-lg">View Packages</button>
          <button className="btn-secondary px-8 py-3 text-lg border-2">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
