import React, { useState } from 'react'
import BookingModal from './BookingModal'

function TripCard({ title, location, image, duration, itinerary }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = () => {
    if (itinerary) {
      window.open(itinerary, '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] w-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <span className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-lg">
            {duration}
          </span>
        </div>
        
        <div className="p-5 relative">
          <div className="mb-4">
            <h3 className="text-xl font-black text-white tracking-tight mb-1 group-hover:text-red-500 transition-colors">
              {title}
            </h3>
            <p className="flex items-center gap-2 text-gray-400 text-xs font-medium">
              <span className="text-red-500">📍</span> {location}
            </p>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <button 
              onClick={handleViewDetails}
              className="w-full py-2.5 bg-white text-black rounded-xl font-bold text-xs hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-lg"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tripTitle={title} 
      />
    </>
  )
}

export default TripCard
