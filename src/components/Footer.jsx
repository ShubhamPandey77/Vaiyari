import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-white px-8 pt-32 pb-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
        <div className="footer-section space-y-8">
          <div className="flex items-center gap-3">
            <img src="/Vaiyari Icon Logo.jpg" alt="Vaiyari Logo" className="h-12 w-12 object-contain rounded-full border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
            <h3 className="text-white text-3xl font-black tracking-tighter">VAIYARI<span className="text-red-500">.</span></h3>
          </div>
          <p className="text-gray-400 leading-relaxed font-light text-lg">
            Your trusted partner for extraordinary group travel adventures. We curate experiences that redefine your perspective of the world.
          </p>
          <div className="flex gap-4">
            {[
              { icon: 'fb', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { icon: 'ig', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', isIg: true },
              { icon: 'tw', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' }
            ].map((social, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 border border-white/10 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white transition-colors">
                  {social.isIg ? (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d={social.path}></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </>
                  ) : (
                    <path d={social.path}></path>
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="text-white text-xl font-bold mb-10 tracking-tight">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Destinations', 'About Us', 'Travel Insurance'].map((link) => (
              <li key={link}>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors font-light flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-red-500 transition-all"></span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-xl font-bold mb-10 tracking-tight">Support</h4>
          <ul className="space-y-4">
            {['Contact Support', 'Terms of Service', 'Privacy Policy', 'FAQs'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors font-light flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-red-500 transition-all"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-xl font-bold mb-10 tracking-tight">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span className="text-gray-400 font-light">info@vaiyari.com</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span className="text-gray-400 font-light">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span className="text-gray-400 font-light">New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-32 pt-12 border-t border-white/5 text-sm text-gray-600 font-light tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Vaiyari Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
