import React from 'react'

function PreviousTrips() {
  const trips = [
    {
      id: 1,
      image: '/past trips/zeroth.jpg',
      title: 'Manali Expedition'
    },
    {
      id: 2,
      image: '/past trips/first.JPG',
      title: 'Kasol Escape'
    },
    {
      id: 3,
      image: '/past trips/second.JPG',
      title: 'kulu Journey'
    },
    {
      id: 4,
      image: '/past trips/third.JPG',
      title: 'Manali Adventure'
    }
  ]

  return (
    <section className="py-32 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
            OUR PREVIOUS <span className="text-red-500">ADVENTURES</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Cherished memories from our past group journeys across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="group relative overflow-hidden rounded-3xl shadow-2xl aspect-4/5">
              <img 
                src={trip.image} 
                alt={trip.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-black text-2xl tracking-tight">
                  {trip.title}
                </h3>
                <div className="w-0 group-hover:w-full h-1 bg-red-600 mt-4 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreviousTrips
