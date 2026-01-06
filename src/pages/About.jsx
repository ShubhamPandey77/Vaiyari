import React from 'react'

function About() {
  return (
    <div className="about-page">
      <main className="max-w-7xl mx-auto px-4">
        <section className="text-center py-16 bg-blue-50 rounded-2xl mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">About Vaiyari</h1>
          <p className="text-xl text-gray-600">Crafting memories through group adventures.</p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="story-content">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg leading-loose text-gray-600 mb-4">
              Vaiyari was born out of a passion for exploration and the belief that travel is better when shared. 
              Founded in <strong>November 2025</strong>, we set out to redefine group travel.
            </p>
            <p className="text-lg leading-loose text-gray-600 mb-4">
              In just our first month, we've successfully organized and completed <strong>more than 5 trips</strong>, 
              bringing together diverse groups of people and creating lasting friendships.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5+</h3>
              <p className="text-sm font-semibold text-gray-500">Trips Completed</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">100+</h3>
              <p className="text-sm font-semibold text-gray-500">Happy Travelers</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">Nov '25</h3>
              <p className="text-sm font-semibold text-gray-500">Established</p>
            </div>
          </div>
        </section>

        <section className="text-center bg-gray-900 text-white py-16 px-8 rounded-2xl">
          <h2 className="text-blue-500 text-3xl font-bold mb-6">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed">
            To provide seamless, safe, and exhilarating group travel experiences that connect people 
            with nature, culture, and each other.
          </p>
        </section>
      </main>
    </div>
  )
}

export default About
