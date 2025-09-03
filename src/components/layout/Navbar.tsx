import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';


import React from 'react'

const Navbar = () => {
    return(
        <header className='bg-white shadow-md'>
            <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
                <Link to="/">Morhe Construction<span className='text-secondary'>Group</span>
                </Link>

                <nav className='hidden md:flex space-x-8'>
                    <NavLink to="/" 
                    className={({isActive}) =>
                         `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}`} 
                    >Home 
                    </NavLink> 

                    <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                    `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}`}
                            >
                            About
                            </NavLink>

                            <NavLink 
                    to="/services" 
                    className={({ isActive }) => 
                    `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}`
                    }
                    >
                        Services
                    </NavLink>

                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                        `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}` }
                    >
                        Contact
                    </NavLink>

                 </nav>


            <div className="hidden md:flex space-x-4">
                <Link 
                    to="/login" 
                    className="px-4 py-2 text-primary hover:text-accent transition"
                >
                    Login
                </Link>

                <Link 
                    to="/register" 
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
                >
                    Register
                </Link>
            </div>

            <button className="md:hidden p-2">
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            </button>

            </div>
        </header>
    )
}

export default Navbar;
