import React from 'react'
import Hero from '../components/Hero'
import TripPackages from '../components/TripPackages'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <main>
        <TripPackages />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Why Travel with Vaiyari?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-gray-50 transition-shadow hover:shadow-lg">
                <h3 className="text-blue-600 text-xl font-bold mb-4">Expert Guides</h3>
                <p className="text-gray-600">Our experienced guides ensure a safe and enriching journey.</p>
              </div>
              <div className="p-8 rounded-xl bg-gray-50 transition-shadow hover:shadow-lg">
                <h3 className="text-blue-600 text-xl font-bold mb-4">Group Discounts</h3>
                <p className="text-gray-600">Special rates for group bookings and families.</p>
              </div>
              <div className="p-8 rounded-xl bg-gray-50 transition-shadow hover:shadow-lg">
                <h3 className="text-blue-600 text-xl font-bold mb-4">Custom Itineraries</h3>
                <p className="text-gray-600">We tailor trips to match your group's interests.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
