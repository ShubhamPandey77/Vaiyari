import React from 'react'

const TermsConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-12 px-8">
      <div className="max-w-4xl mx-auto font-light leading-relaxed">
        <h1 className="text-5xl font-black mb-8 tracking-tighter uppercase">Terms & <span className="text-red-500">Conditions</span></h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">1. Booking and Payments</h2>
            <p>
              By booking a trip with Vaiyari, you agree to pay the specified amount for the selected package. 
              Bookings are confirmed only upon receipt of the initial deposit or full payment as specified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">2. Cancellation and Refunds</h2>
            <p>
              Cancellation policies vary by trip and are specified at the time of booking. Generally:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Cancellations made 30+ days before departure: Partial refund (minus non-refundable deposits).</li>
              <li>Cancellations made within 30 days: Non-refundable.</li>
              <li>No-shows are not eligible for refunds.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">3. Traveler Responsibility</h2>
            <p>
              Travelers are responsible for ensuring they have valid travel documents (passports, visas, etc.) 
              and are physically fit for the activities included in the itinerary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">4. Liability</h2>
            <p>
              Vaiyari acts as an organizer and facilitator. We are not liable for personal injury, property damage, 
              or loss caused by third-party service providers or unforeseen circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">5. Itinerary Changes</h2>
            <p>
              While we strive to adhere to the planned itinerary, Vaiyari reserves the right to make changes 
              due to weather conditions, safety concerns, or other logistics beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">6. Code of Conduct</h2>
            <p>
              We promote a respectful and inclusive environment. Vaiyari reserves the right to remove any 
              participant whose behavior is disruptive or harmful to others without a refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">7. Miscellaneous</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at varius sapien. 
              Donec elementum efficitur nisi, at gravida tellus. Quisque sed leo sit amet eros iaculis porta. 
              Vivamus elementum elit ac nibh luctus, non hendrerit magna vehicula. 
              Integer sit amet vulputate tellus, quis eleifend tellus.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm">Last updated: February 2025</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions
