import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import { socialLinks } from '../data';

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink 
          to='/' 
          className='w-10 h-10 rounded-lg bg-white flex items-center justify-center flex font-bold shadow-md'>
          <p className='blue-gradient_text'>
            ZA
          </p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
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

         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            {socialLinks.map((social) => (
              <li
                key={social.name}
                className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-md mb-2`}
                style={{ backgroundColor: social.color }}
              >
                <Link 
                  to={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex justify-between items-center w-full text-[#F4F0DB] p-4'
                >
                  <span className='mr-2'>{social.name}</span>
                  <img 
                    src={social.iconUrl}
                    alt={social.name}
                    className='w-8 h-8'
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </header>
  );
}

export default Navbar;