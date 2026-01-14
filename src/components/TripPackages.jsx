import React from 'react'
import TripCard from './TripCard'

function TripPackages() {
  const domesticPackages = [
    {
      id: 1,
      title: 'Udaipur Heritage',
      location: 'Rajasthan, India',
      image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1000&auto=format&fit=crop',
      duration: '4 Days'
    },
    {
      id: 2,
      title: 'Manali Heights',
      location: 'Himachal Pradesh, India',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop',
      duration: '5 Days',
      itinerary: '/itinarary/Vaiyari Travels Manali Itinerary.pdf'
    },
    {
      id: 3,
      title: 'Kasol Riverside',
      location: 'Himachal Pradesh, India',
      image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=1000&auto=format&fit=crop',
      duration: '3 Days',
      itinerary: '/itinarary/Kasol Itinerary.pdf'
    },
    {
      id: 4,
      title: 'Nainital Lakes',
      location: 'Uttarakhand, India',
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1000&auto=format&fit=crop',
      duration: '4 Days'
    }
  ]

  const internationalPackages = [
    {
      id: 5,
      title: 'European Grandeur',
      location: 'Western Europe',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop',
      duration: '12 Days'
    },
    {
      id: 6,
      title: 'Dubai Skyline',
      location: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
      duration: '6 Days'
    },
    {
      id: 7,
      title: 'African Safari',
      location: 'Kenya/Tanzania',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop',
      duration: '9 Days'
    },
    {
      id: 8,
      title: 'USA Discovery',
      location: 'United States',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop',
      duration: '14 Days'
    }
  ]

  return (
    <section id="packages" className="py-32 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              OUR POPULAR <br />
              <span className="text-red-500">PACKAGES</span>
            </h2>
            <div className="w-20 h-2 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-md font-light">
            Hand-picked group trips designed for explorers who crave authentic experiences.
          </p>
        </div>

        {/* Domestic Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-black text-white uppercase tracking-widest">Domestic</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domesticPackages.map((pkg) => (
              <TripCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>

        {/* International Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-black text-white uppercase tracking-widest">International</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internationalPackages.map((pkg) => (
              <TripCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TripPackages
