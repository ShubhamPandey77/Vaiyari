import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-12 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-8 tracking-tighter">ABOUT <span className="text-red-500">US</span></h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
          <p>
            Welcome to <span className="text-white font-bold">VAIYARI</span>, your ultimate destination for curated group travel experiences. 
            We believe that travel is more than just visiting new places; it's about the stories we create, 
            the friendships we forge, and the perspectives we gain.
          </p>
          
          <p>
            Founded with a passion for exploration and community, Vaiyari specializes in bringing together 
            like-minded travelers to discover the world's most breathtaking destinations. Whether it's 
            trekking through the Himalayas, exploring hidden coastal gems, or experiencing vibrant 
            cultural festivals, we ensure every journey is extraordinary.
          </p>
          
          <h2 className="text-3xl font-bold text-white mt-12 mb-4 tracking-tight">Our Mission</h2>
          <p>
            Our mission is to redefine group travel by providing seamless, safe, and soulful experiences. 
            We handle the logistics so you can focus on the moments that matter. From curated itineraries 
            to expert local guides, we go the extra mile to make every trip a "once-in-a-lifetime" adventure.
          </p>
          
          <h2 className="text-3xl font-bold text-white mt-12 mb-4 tracking-tight">Why Choose Vaiyari?</h2>
          <ul className="list-disc list-inside space-y-4 ml-4">
            <li><span className="text-white font-medium">Expert Curation:</span> Every destination and activity is handpicked for its uniqueness and quality.</li>
            <li><span className="text-white font-medium">Community First:</span> We foster a welcoming environment where strangers become friends.</li>
            <li><span className="text-white font-medium">Safety & Support:</span> Your safety is our top priority, with 24/7 support during your trips.</li>
            <li><span className="text-white font-medium">Authentic Experiences:</span> We take you off the beaten path to experience the true essence of a place.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
