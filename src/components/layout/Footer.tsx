import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Morhe Construction Group</h3>
            <p className="text-gray-300">
              Building your dreams into reality with quality construction services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contacts" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              Planners Avenue<br />
              Spintex-Road, Accra-Ghana<br />
              Phone: (+233) 50 775 8740<br />
              Email: edwardmorhe77@gmail.com
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Morhe Construction Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
