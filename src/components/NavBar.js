// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  // const [nav, setNav] = useState(false);

  return (
    <nav className='flex justify-between items-center w-[80%] h-20 px-4 text-white mx-auto pt-12'>
      <Link to='/'>
        <h1 className='text-xl md:text-2xl lg:text-3xl mx-2 cursor-pointer italic hover:text-violet-500 duration-300 Mont-medium whitespace-nowrap'>
          Dawid Dąbrowski
        </h1>
      </Link>
      {/* <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div> */}
      <ul className='flex justify-end w-full text-gray-200 mr-24'>
        <NavLink
          to='/about'
          className='px-4 cursor-pointer capitalize py-6 text-xl hover:text-violet-500 duration-300'>
          About
        </NavLink>
        <NavLink
          to='/projects'
          className='px-4 cursor-pointer capitalize py-6 text-xl hover:text-violet-500 duration-300'>
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className='px-4 cursor-pointer capitalize py-6 text-xl hover:text-violet-500 duration-300'>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
