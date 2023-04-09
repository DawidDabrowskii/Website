import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navVariants, staggerContainer, slideIn } from '../utils/motion';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleAside = () => {
    setNav(!nav);
  };
  const handleRemoveAside = e => {
    if (e.target.id === 'wholeAside') {
      setNav(!nav);
    }
  };

  return (
    <header className='relative w-full'>
      <motion.nav
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        className='flex justify-between items-center w-[80%] h-20 px-4 text-white mx-auto pt-12'>
        <Link to='/'>
          <h1 className='text-xl md:text-2xl lg:text-3xl mx-2 cursor-pointer italic hover:text-violet-500 duration-300 Lato-bold whitespace-nowrap'>
            Dawid Dąbrowski
          </h1>
        </Link>
        <ul className='hidden md:flex justify-end w-full text-gray-200 md:mr-24 ml-24'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'px-4 cursor-pointer capitalize py-6 text-xl duration-300 scale-125 text-violet-600'
                : 'px-4 cursor-pointer capitalize py-6 text-xl duration-300 hover:text-violet-500'
            }>
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive
                ? 'px-4 cursor-pointer capitalize py-6 text-xl duration-300 scale-125 text-violet-600'
                : 'px-4 cursor-pointer capitalize py-6 text-xl duration-300 hover:text-violet-500'
            }>
            Projects
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive
                ? 'px-4 cursor-pointer capitalize py-6 text-xl duration-300 scale-125 text-violet-600'
                : 'px-4 cursor-pointer capitalize py-6 text-xl duration-300 hover:text-violet-500'
            }>
            Contact
          </NavLink>
        </ul>
        <div
          onClick={handleAside}
          className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} id='aside1' />}
        </div>
      </motion.nav>
      {nav && (
        <motion.aside
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          onClick={handleRemoveAside}
          id='wholeAside'
          className='md:hidden fixed w-screen h-full z-20 top-0 backdrop-blur-sm '>
          <motion.ul
            variants={slideIn('right', 'tween', 0.2, 0.4)}
            className='absolute w-[240px] bg-gradient-to-b from-violet-900 to-black right-0 h-screen flex flex-col items-center pt-4  text-white  text-xl filter mix-blend-multiply opacity-90'>
            <motion.li
              variants={slideIn('right', 'tween', 0.4, 0.4)}
              className='mt-8 w-full text-center hover:bg-slate-900 py-4 cursor-pointer'
              onClick={handleAside}>
              <button>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </motion.li>
            <motion.li
              variants={slideIn('right', 'tween', 0.6, 0.4)}
              className='w-full text-center hover:bg-slate-900 py-4 cursor-pointer'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'duration-300 font-bold  block' : ' block'
                }>
                About
              </NavLink>
            </motion.li>
            <motion.li
              variants={slideIn('right', 'tween', 0.8, 0.4)}
              className='w-full text-center hover:bg-slate-900 py-4 cursor-pointer'>
              <NavLink
                to='/projects'
                className={({ isActive }) =>
                  isActive ? 'duration-300  font-bold block' : 'block'
                }>
                Projects
              </NavLink>
            </motion.li>
            <motion.li
              variants={slideIn('right', 'tween', 1, 0.4)}
              className='w-full text-center hover:bg-slate-900 py-4 cursor-pointer'>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'duration-300 font-bold block' : 'block'
                }>
                Contact
              </NavLink>
            </motion.li>
          </motion.ul>
        </motion.aside>
      )}
    </header>
  );
};

export default NavBar;
