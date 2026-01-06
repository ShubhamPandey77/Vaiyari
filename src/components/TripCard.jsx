import React from 'react'

function TripCard({ title, location, price, image, duration }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 w-full">
      <div className="relative h-52">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-2 right-2 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">{duration}</span>
      </div>
      <div className="p-6">
        <h3 className="m-0 mb-2 text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm mb-6">📍 {location}</p>
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <span className="font-bold text-lg text-blue-600">From ${price}</span>
          <button className="btn-primary px-4 py-1.5 text-sm">Explore</button>
        </div>
      </div>
    </div>
  )
}

export default TripCard
