import Technologies from '../components/Technologies';
import ThursdayPlays from '../assets/portfolio/ThursdayPlays.png';
import image from '../assets/heroImage.jpg';

import { useTime, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';

const About = () => {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 5000], // every 5s
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  const x = useTransform(
    time,
    [0, 10000, 20000, 30000],
    ['0%', '50%', '100%', '50%']
  );

  return (
    <div className='mt-24 w-full text-white py-8 '>
      <div className='max-w-screen-xl mx-auto relative z-0'>
        <div className=' p-6 flex flex-col gap-8  rounded-full mx-8 wave-body relative '>
          <motion.div
            className='bg-violet-500 absolute top-[-20px] left-[-110px] w-48 h-48 filter blur-xl mix-blend-multiply opacity-30 rounded-3xl'
            style={{ rotate, x }}
          />
          <div className='flex w-3/4 z-10'>
            <img
              src={image}
              alt='profile'
              className='rounded-full w-24 h-24 object-cover '
            />
            <div className=' flex flex-col justify-center px-4'>
              <h5 className='font-semibold text-xl '>Dawid</h5>
              <p className='text-violet-500 Mont-normal'>Frontend Developer</p>
            </div>
          </div>
          <div className='wave z-10 absolute'></div>
        </div>
      </div>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='max-w-screen-xl p-4 mx-auto grid grid-cols-2 lg:grid-cols-3 justify-center mt-12 z-10 relative '>
        <Technologies />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='p-6 flex flex-col gap-8 bg-slate-900 rounded-xl mx-4 shadow shadow-violet-500'>
          <h5 className='text-2xl font-bold'>About me</h5>
          <p>Hello, my name is Dawid</p>
          <p>
            So far I have been coding almost every day for many months and you
            can check all of my projects on my{' '}
            <a
              href='https://github.com/dawiddabrowskii'
              className='text-violet-500 text-semibold hover:text-violet-700'>
              GitHub
            </a>{' '}
            profile
          </p>
          <p>
            In the past I used to create 2D/3D games using Unity engine and C#.
            Skills developed during that period helped me a lot in learning web
            development{' '}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='p-6 flex flex-col bg-slate-900 rounded-xl mx-4 gap-4 shadow shadow-violet-500 mt-4 lg:mt-0'>
          <h5 className='text-2xl font-bold'>Last Project:</h5>
          <div className='mt-4 hover:scale-105 duration-300'>
            <a
              href='https://thursdayplays.netlify.app/'
              target='_blank'
              rel='noreferrer'>
              <img
                src={ThursdayPlays}
                alt='thursdayplays project'
                className='rounded-lg'
              />
            </a>
          </div>
          <p className='mt-8'>
            Project is about generating fair squads for matches between
            colleagues every thursday according to present players and their
            skillrates.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
