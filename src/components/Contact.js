const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/b62c9c68-b2cc-4c9f-a0fc-c69a6b00d365'
            method='POST'
            className='flex flex-col w-full md:w-1/2'
          >
            <label class='translate-y-96' htmlFor='name'></label>
            <input
              type='text'
              name='name'
              required
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400 min'
            />
            <label class='translate-y-96' htmlFor='email'></label>
            <input
              type='type'
              name='email'
              minlength='3'
              maxlength='28'
              required
              placeholder='Enter your email'
              className=' my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              required
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400'
            ></textarea>
            <button className=' bg-gradient-to-b from-violet-500 to-gray-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
