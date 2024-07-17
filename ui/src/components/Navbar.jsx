import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header fixed top-0 left-0 w-full z-50 p-4 bg-transparent font-bold'>
      <div className='flex justify-between items-center'>
        <NavLink 
          to='/' 
          className='w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md'>
          <p className='blue-gradient_text bg-clip-text text-transparent'>
            ZA
          </p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-md'>
          <NavLink 
            to='/about' 
            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
          >
              About
          </NavLink>
          <NavLink 
            to='/projects' 
            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
          >
              Projects
          </NavLink>
          <NavLink 
            to='/contact' 
            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
          >
              Contact
          </NavLink>
         </nav>
      </div>
    </header>
  );
}

export default Navbar;