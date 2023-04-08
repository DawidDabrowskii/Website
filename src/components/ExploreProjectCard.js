import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  projectUrl,
}) => {
  console.log(id);

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id
          ? 'lg:flex-[3.5] flex-[10] w-[650px]'
          : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer border-2 border-violet-500 rounded-2xl`}
      onClick={() => handleClick(id)}>
      <img
        src={imgUrl}
        alt={title}
        className='absolute w-full h-full object-cover rounded-[12px]'
      />
      {active !== id ? (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col lg:bg-[rgba(0,0,0,0.3)] rounded-b-[12px] z-10'>
          <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[12px] mb-[16px]'></div>
          <h3 className='mt-[24px] font-semibold sm:text-[16px] text-[12px] text-white'>
            {title}
          </h3>
        </div>
      ) : (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[16px] z-10'>
          <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[24px] mb-[16px]'></div>
          <a
            className='font-normal text-[16px] leading-[20px] text-white '
            href={projectUrl}
            target='_blank'
            rel='noreferrer'>
            <p className='hover:text-violet-500 hover:scale-105 duration-300 font-bold border-b inline hover:border-violet-500'>
              Check project
            </p>
          </a>
          <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
