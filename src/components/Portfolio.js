import RecipeCenter from '../assets/portfolio/RecipeCenter.png';
import Cinemacify from '../assets/portfolio/CinemacifyBeta.png';
import CSS from '../assets/css.png';
import SCSS from '../assets/scss.png';
import JavaScript from '../assets/javascript.png';
import HTML from '../assets/html.png';
import Tailwind from '../assets/tailwind.png';
import Github from '../assets/github.png';
import Bootstrap from '../assets/bootstrap.png';
import ReactImage from '../assets/react.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'RecipeCenter',
      src: RecipeCenter,
      link: `https://recipe-center.netlify.app/`,
      code: `https://github.com/DawidDabrowskii/Recipe-Center`,
      technologies: [SCSS, HTML, JavaScript],
    },
    {
      id: 2,
      title: 'Cinemacify',
      src: Cinemacify,
      link: `/`,
      code: `https://github.com/DawidDabrowskii/Recipe-Center`,
      technologies: [ReactImage, Tailwind, HTML],
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, link, code, technologies, title }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
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
                  rel='noopener noreferrer'
                >
                  Demo
                </a>
                <a
                  className='w-1/2 px-2 py-3 m-4 duration-200 hover:scale-105 hover:text-violet-500'
                  href={code}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
