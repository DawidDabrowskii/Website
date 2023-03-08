import HeroImage from '../assets/heroImage.jpg';
import { MdOutlineArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-5'>
        <div className='flex flex-col justify-center h-full lg:ml-14 xl:ml-0 my-36'>
          <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white'>
            Frontend <span className='text-violet-500'>Developer</span>
          </h2>
          <h3 className='text-white lg:text-center my-6 tracking-[.25em]'>
            Hello World!
          </h3>
          <p className='text-gray-400 py-4 max-w-md'>
            Welcome to my website, here you can learn some useful information
            about me.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-violet-500 to-gray-800 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-200'>
                <MdOutlineArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-3/5 md:w-4/5 object-cover mb-48 md:mb-0'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
