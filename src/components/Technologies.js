import html from '../assets/html.png';
import css from '../assets/css.png';
import scss from '../assets/scss.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import bootstrap from '../assets/bootstrap.png';
import reactImage from '../assets/react.png';
import styledcomponents from '../assets/styledcomponents.png';
import typescript from '../assets/typescript.png';
import framermotion from '../assets/framermotion.png';
import reduxImage from '../assets/redux.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-500',
    },
    {
      id: 2,
      src: reactImage,
      title: 'React',
      style: 'shadow-cyan-400',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 7,
      src: framermotion,
      title: 'Framer-Motion',
      style: 'shadow-violet-500',
    },
    {
      id: 8,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-violet-600',
    },
    {
      id: 9,
      src: reduxImage,
      title: 'Redux',
      style: 'shadow-violet-800',
    },
    {
      id: 10,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400',
    },
    {
      id: 11,
      src: scss,
      title: 'SCSS',
      style: 'shadow-pink-300',
    },
    {
      id: 12,
      src: styledcomponents,
      title: 'StyledComponents',
      style: 'shadow-pink-400',
    },
  ];
  return (
    <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
      <div className='p-6 flex flex-col text-white bg-slate-900 rounded-xl mx-4 shadow shadow-violet-500 '>
        <div>
          <h5 className='text-2xl font-bold ml-[-16px] sm:ml-0'>
            Technologies
          </h5>
        </div>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 justify-items-center'>
          {technologies.map(({ id, src, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 p-2 rounded-lg w-16 h-16 flex flex-col items-center`}>
              <img src={src} alt={title} className='w-20' />
              <p className='mt-4 text-xs whitespace-nowrap'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
