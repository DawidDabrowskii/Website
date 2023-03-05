import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-5">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            atque officiis. Et sint facilis amet minus dolor id modi. Vel nam
            excepturi ducimus voluptatem exercitationem.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-violet-500 to-gray-800 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/5 md:w-4/5 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
