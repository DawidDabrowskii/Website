import { Link } from 'react-router-dom';

import ExploreProjectCard from '../components/ExploreProjectCard';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

import { exploreProjects } from '../constants';

const Home = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className='bg-gradient-to-b from-black to-gray-800'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:gap-5 '>
        <div className='flex flex-col justify-center h-full lg:ml-14 xl:ml-0 mt-36'>
          <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white'>
            Frontend <span className='text-violet-500'>Developer</span>
          </h2>
          <h3 className='text-white lg:text-center my-6 tracking-[.25em]'>
            Hello World!
          </h3>
          <p className='text-gray-400 py-4 text-center'>
            Welcome to my website, here you can learn some useful informations
            about me.
          </p>
          <div className='flex justify-center'>
            <Link
              to='/contact'
              className=' text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-violet-500 to-gray-800 cursor-pointer hover:scale-105 duration-300'>
              Contact me
            </Link>
          </div>
        </div>
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] '>
          {exploreProjects.map((project, index) => (
            <ExploreProjectCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
