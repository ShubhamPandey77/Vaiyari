import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-12 px-8">
      <div className="max-w-4xl mx-auto font-light leading-relaxed">
        <h1 className="text-5xl font-black mb-8 tracking-tighter">PRIVACY <span className="text-red-500">POLICY</span></h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">1. Introduction</h2>
            <p>
              Vaiyari ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, and safeguard your personal information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">2. Information We Collect</h2>
            <p>We may collect personal information that you provide to us, including but not limited to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Booking details and travel preferences</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Emergency contact information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Process your travel bookings and payments</li>
              <li>Communicate with you regarding your trips</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">4. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, loss, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">5. Third-Party Sharing</h2>
            <p>
              We may share your information with trusted third-party partners (such as hotels, transport providers, and 
              insurance companies) solely for the purpose of fulfilling your travel arrangements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, 
              please contact us at vaiyaritravels@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">7. Cookies and Tracking</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. 
              Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
              Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
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

export default PrivacyPolicy
