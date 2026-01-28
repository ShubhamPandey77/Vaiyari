import React, { Suspense, lazy } from 'react'
import Hero from '../components/Hero'

const TripPackages = lazy(() => import('../components/TripPackages'))
const PreviousTrips = lazy(() => import('../components/PreviousTrips'))
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'))
const CommentMarquee = lazy(() => import('../components/CommentMarquee'))

function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#0a0a0a] text-white">Loading...</div>}>
        <TripPackages />
        <PreviousTrips />
        <WhyChooseUs />
        <CommentMarquee />
      </Suspense>
    </main>
  )
}

export default Home
