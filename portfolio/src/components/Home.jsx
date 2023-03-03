import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home">
      <div>
        <div>
          <h2>I'm Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            atque officiis. Et sint facilis amet minus dolor id modi. Vel nam
            excepturi ducimus voluptatem exercitationem.
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
