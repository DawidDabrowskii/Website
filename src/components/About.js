const About = () => {
  return (
    <div
      name='about'
      className='w-full h-3/4 bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          I would describe myself as a frontend developer with a strong
          commitment to delivering high-quality web interfaces that meet the
          needs and expectations of users. With a thorough understanding of web
          development technologies and best practices, I am able to write clean,
          efficient, and visually appealing code. Additionally, I enjoy working
          in team with people which I can also learn from.
        </p>
        <br />

        <p className='text-xl'>
          I am fascinated by the possibilities of front-end development and want
          to use my skills to create interactive and user-friendly applications.
          I am confident that as a Front-end Developer I will have the
          opportunity to continuously develop and gain new experiences, which is
          extremely important to me.
        </p>
      </div>
    </div>
  );
};

export default About;
