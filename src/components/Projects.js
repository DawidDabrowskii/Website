import RecipeCenter from '../assets/portfolio/RecipeCenter.png';
import Cinemacify from '../assets/portfolio/Cinemacify.png';
import SCSS from '../assets/scss.png';
import JavaScript from '../assets/javascript.png';
import HTML from '../assets/html.png';
import Tailwind from '../assets/tailwind.png';
import ReactImage from '../assets/react.png';
import ClothingShop from '../assets/portfolio/ClothingShop.png';
import StyledComponents from '../assets/styledcomponents.png';
import TypeScript from '../assets/typescript.png';
import Cosmoverse from '../assets/portfolio/Cosmoverse.png';
import FramerMotion from '../assets/framermotion.png';
import ThursdayPlays from '../assets/portfolio/ThursdayPlays.png';
import ReduxImage from '../assets/redux.png';

import { staggerContainer, fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ThursdayPlays',
      src: ThursdayPlays,
      link: `https://thursdayplays.netlify.app/`,
      code: `https://github.com/DawidDabrowskii/ThursdayPlays`,
      technologies: [TypeScript, ReduxImage, ReactImage],
    },
    {
      id: 2,
      title: 'Cosmoverse',
      src: Cosmoverse,
      link: `https://cosmoverse-dd.netlify.app/`,
      code: `https://github.com/DawidDabrowskii/Cosmoverse`,
      technologies: [TypeScript, ReactImage, FramerMotion],
    },
    {
      id: 3,
      title: 'Clothing Shop',
      src: ClothingShop,
      link: `https://clothing-shop-dd.netlify.app/`,
      code: `https://github.com/DawidDabrowskii/Clothing-Shop`,
      technologies: [ReactImage, StyledComponents, JavaScript],
    },
    {
      id: 4,
      title: 'Cinemacify',
      src: Cinemacify,
      link: `https://cinemacify.netlify.app/`,
      code: `https://github.com/DawidDabrowskii/Cinemacify`,
      technologies: [ReactImage, Tailwind, HTML],
    },
    {
      id: 5,
      title: 'RecipeCenter',
      src: RecipeCenter,
      link: `https://recipe-center.netlify.app/`,
      code: `https://github.com/DawidDabrowskii/Recipe-Center`,
      technologies: [SCSS, HTML, JavaScript],
    },
  ];

  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-24'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline '>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(
            ({ id, src, link, code, technologies, title }, index) => (
              <motion.div
                variants={fadeIn('up', 'spring', index * 0.3, 1)}
                key={id}
                className=' rounded-lg shadow shadow-violet-500'>
                <p className='text-center text-lg my-4 md:text-xl'>{title}</p>
                <img
                  src={src}
                  alt='RecipeCenter project'
                  className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex justify-center mt-4'>
                  {technologies.map(src => (
                    <img
                      key={Math.random() * Math.random()}
                      src={src}
                      alt={`${src} logo`}
                      className='w-2/12 mx-4 mt-3 '
                    />
                  ))}
                </div>
                <div className='flex items-center justify-center text-center'>
                  <a
                    type='button'
                    className='w-1/2 px-2 py-3 m-4 duration-200 hover:scale-105 hover:text-violet-500'
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Demo
                  </a>
                  <a
                    className='w-1/2 px-2 py-3 m-4 duration-200 hover:scale-105 hover:text-violet-500'
                    href={code}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Code
                  </a>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
