import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = () => {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    sideMenuRef.current?.style.setProperty('transform', 'translateX(0)');
  };

  const closeMenu = () => {
    sideMenuRef.current?.style.setProperty('transform', 'translateX(-100%)');
  };

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <Link to="/" className='text-xl font-bold'>
          Morhe Construction<span className='text-secondary'> Group</span>
        </Link>

        <nav className='hidden md:flex space-x-8'>
          <NavLink to="/" 
            className={({isActive}) => 
              `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}`}
          >
            Home
          </NavLink>
          <NavLink to="/about" 
            className={({isActive}) => 
              `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}`}
          >
            About
          </NavLink>
          <NavLink to="/services"
            className={({isActive}) => 
              `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}`}
          >
            Services
          </NavLink>
          <NavLink to="/contact"
            className={({isActive}) => 
              `hover:text-accent ${isActive ? 'text-accent font-medium' : 'text-gray-700'}`}
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-primary hover:text-accent transition">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition">
            Register
          </Link>
        </div>

        <button onClick={openMenu} className="md:hidden p-2">
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={sideMenuRef} className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 -translate-x-full z-50">
        <div className="p-4 flex justify-end">
          <button onClick={closeMenu} className="p-2">
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <NavLink to="/" onClick={closeMenu} className={({isActive}) => `block font-medium ${isActive ? 'text-accent' : 'text-gray-700'}`}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({isActive}) => `block font-medium ${isActive ? 'text-accent' : 'text-gray-700'}`}>
            About
          </NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({isActive}) => `block font-medium ${isActive ? 'text-accent' : 'text-gray-700'}`}>
            Services
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => `block font-medium ${isActive ? 'text-accent' : 'text-gray-700'}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
