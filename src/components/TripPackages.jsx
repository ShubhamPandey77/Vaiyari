import React from 'react'
import TripCard from './TripCard'

function TripPackages() {
  const packages = [
    {
      id: 1,
      title: 'Himalayan Adventure',
      location: 'Manali, India',
      price: '499',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5 Days'
    },
    {
      id: 2,
      title: 'Tropical Paradise',
      location: 'Bali, Indonesia',
      price: '899',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7 Days'
    },
    {
      id: 3,
      title: 'European Charm',
      location: 'Paris, France',
      price: '1299',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 Days'
    }
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Packages</h2>
        <p className="text-lg text-gray-600">Hand-picked group trips for the best experience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map(pkg => (
          <TripCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </section>
  )
}

export default TripPackages
