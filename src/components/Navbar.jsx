import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-[1000]">
      <div className="navbar-logo">
        <Link to="/" className="no-underline">
          <h1 className="m-0 text-2xl text-blue-600 font-bold tracking-tight">Vaiyari</h1>
        </Link>
      </div>
      <ul className="hidden md:flex list-none m-0 p-0 gap-6">
        <li><Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Home</Link></li>
        <li><Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">About</Link></li>
        <li><Link to="/services" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Services</Link></li>
        <li><Link to="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Contact</Link></li>
      </ul>
      <div className="navbar-toggle">
        <button className="btn-primary">Book Now</button>
      </div>
    </nav>
  )
}

export default Navbar
