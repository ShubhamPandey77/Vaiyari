import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 pt-12 pb-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="footer-section">
          <h3 className="text-blue-500 text-xl font-bold mb-4">Vaiyari</h3>
          <p className="text-gray-400">Your trusted partner for group travel adventures. Started in Nov 2025.</p>
        </div>
        <div className="footer-section">
          <h4 className="text-blue-500 text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="list-none p-0">
            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white transition-colors no-underline">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white transition-colors no-underline">About Us</Link></li>
            <li className="mb-2"><Link to="/services" className="text-gray-400 hover:text-white transition-colors no-underline">Services</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-blue-500 text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">Email: info@vaiyari.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="text-center mt-12 pt-4 border-t border-gray-800 text-sm text-gray-500">
        <p>&copy; 2026 Vaiyari Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
