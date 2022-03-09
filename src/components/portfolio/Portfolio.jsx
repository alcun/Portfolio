import "./portfolio.scss";
import Slider from "../slider/Slider";
import { FaSortDown } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">      
    <h1 className="font-face-ag">Projects</h1>
    <Slider />
    <div className="nextPage">
        <a className="vert-move" href="#about">
          <FaSortDown className="arrow-down" />
        </a>
      </div>
    </div>

  );
}
