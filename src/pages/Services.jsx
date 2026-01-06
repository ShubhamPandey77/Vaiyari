import React from 'react'

function Services() {
  const services = [
    {
      title: 'Group Expeditions',
      description: 'Join like-minded travelers on curated group adventures to exotic locations.',
      icon: '🏔️'
    },
    {
      title: 'Corporate Retreats',
      description: 'Customized team-building trips designed to boost morale and collaboration.',
      icon: '💼'
    },
    {
      title: 'Educational Tours',
      description: 'Immersive learning experiences for students and academic groups.',
      icon: '🎓'
    },
    {
      title: 'Luxury Getaways',
      description: 'Premium travel experiences with top-tier accommodation and services.',
      icon: '✨'
    },
    {
      title: 'Photography Tours',
      description: 'Specialized trips to the most photogenic spots on earth with expert guidance.',
      icon: '📸'
    },
    {
      title: 'Cultural Immersion',
      description: 'Deep dives into local traditions, food, and history.',
      icon: '🏮'
    }
  ]

  return (
    <div className="services-page">
      <main className="max-w-7xl mx-auto px-4">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Whatever your travel style, Vaiyari has you covered.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center transition-transform hover:-translate-y-1">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </section>

        <section className="text-center py-16 px-8 bg-blue-50 rounded-3xl mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and customized quote.</p>
          <button className="btn-primary px-10 py-4 text-lg">Get in Touch</button>
        </section>
      </main>
    </div>
  )
}

export default Services
