import React from 'react'
import Hero from '../components/Hero'
import TripPackages from '../components/TripPackages'
import PreviousTrips from '../components/PreviousTrips'
import WhyChooseUs from '../components/WhyChooseUs'

function Home() {
  return (
    <main>
      <Hero />
      <TripPackages />
      <PreviousTrips />
      <WhyChooseUs />
    </main>
  )
}

export default Home
