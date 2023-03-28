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
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 3,
      src: reactImage,
      title: 'React',
      style: 'shadow-cyan-400',
    },
    {
      id: 4,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 6,
      src: scss,
      title: 'SCSS',
      style: 'shadow-pink-300',
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 8,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400',
    },
    {
      id: 9,
      src: styledcomponents,
      title: 'StyledComponents',
      style: 'shadow-pink-400',
    },
    {
      id: 10,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-violet-600',
    },
  ];
  return (
    <div
      name='technologies'
      className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Technologies
          </p>
          <p className='py-6'>These are the tools I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
