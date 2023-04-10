import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

import { motion } from 'framer-motion';
import {
  footerVariants,
  staggerContainer,
  fadeIn,
  zoomIn,
} from '../utils/motion';

const Contact = () => {
  return (
    <div className='w-full p-4 text-white pt-48 bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto'>
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex justify-center text-4xl pb-4'>
          <motion.h6 variants={fadeIn('up', 'tween', 0.3, 0.6)}>
            Choose
            <span className='text-violet-500'> your </span> way to{' '}
            <span className='text-violet-500'>contact me</span>{' '}
          </motion.h6>
        </motion.div>
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col w-3/4 mx-auto mt-24 '>
          <motion.h6
            variants={fadeIn('down', 'tween', 0.3, 0.6)}
            className='font-semibold text-xl pb-8 text-center'>
            Contact options
          </motion.h6>
          <motion.div
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-row max-[840px]:flex-col max-[840px]:gap-4 mt-4 text-lg w-full justify-between '>
            <a
              className='border rounded-full p-4 flex gap-4 items-center justify-center hover:scale-105 duration-300 hover:text-violet-500 hover:border-violet-500'
              href='https://linkedin.com/in/dawid-dabrowski680'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin size={30} />
              <p>Linkedin</p>
            </a>
            <a
              className='border rounded-full p-4 flex gap-4 items-center justify-center hover:scale-105 duration-300 hover:text-violet-500 hover:border-violet-500'
              href='mailto:dabrowskidawid680@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <HiOutlineMail size={30} />
              <p>E-Mail</p>
            </a>
            <div className='border rounded-full p-4 hover:scale-105 duration-300 hover:text-violet-500 hover:border-violet-500'>
              <p className='text-center'>dabrowskidawid680@gmail.com</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-48'>
        <div className='pb-8 text-center'>
          <h5 className='text-4xl font-bold '>Form</h5>
          <p className='py-6'>
            Submit the form below to get in touch with me directly
          </p>
        </div>
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex justify-center items-center'>
          <motion.form
            variants={zoomIn(0.2, 0.8)}
            action='https://getform.io/f/b62c9c68-b2cc-4c9f-a0fc-c69a6b00d365'
            method='POST'
            className='flex flex-col w-full md:w-1/2'>
            <label className='translate-y-96' htmlFor='name'></label>
            <input
              type='text'
              name='name'
              required
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400 min'
            />
            <label className='translate-y-96' htmlFor='email'></label>
            <input
              type='type'
              name='email'
              min='3'
              max='28'
              required
              placeholder='Enter your email'
              className=' my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              required
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400'></textarea>
            <button className=' bg-gradient-to-b from-violet-500 to-gray-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
