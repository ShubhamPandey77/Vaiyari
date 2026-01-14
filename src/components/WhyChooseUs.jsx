import React from 'react'

function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: 'Safe & Secure',
      description: 'Your safety is our top priority. We provide vetted accommodations and experienced guides.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Group Experience',
      description: 'Join like-minded travelers and build lifelong friendships on our curated group trips.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Hassle-Free Planning',
      description: 'We handle all the logistics, from transport to stays, so you can focus on the experience.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Unique Destinations',
      description: 'Discover offbeat locations and hidden gems that you won\'t find in standard travel guides.'
    }
  ]

  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              WHY CHOOSE <br />
              <span className="text-red-600">VAIYARI?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We don't just organize trips; we craft legendary journeys that redefine your perspective of the world.
            </p>
          </div>
          <div className="hidden lg:block text-[120px] font-black text-white/[0.03] select-none leading-none tracking-tighter">
            VAIYARI
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-red-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Number */}
              <div className="absolute top-4 right-6 text-4xl font-black text-white/5 group-hover:text-red-500/10 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="mb-10 relative">
                <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-all duration-500 transform group-hover:rotate-6">
                  {React.cloneElement(feature.icon, { 
                    stroke: "currentColor", 
                    className: "text-red-500 group-hover:text-white transition-colors duration-500" 
                  })}
                </div>
                <div className="absolute -inset-1 bg-red-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
