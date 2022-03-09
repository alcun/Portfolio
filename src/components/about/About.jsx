import { FaSortDown } from "react-icons/fa";
import "./about.scss";
import portrait from "./assets/portrait.png";
import ReactTooltip from "react-tooltip";


export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutContainer">
        <div className="left">
          <h1 className="font-face-ag">Who Am I?</h1>
          <ul>
            <h2 >Work</h2>
            <p>
              My work revolves around:
            </p>
            <li>- Designing</li>
            <li>- Creating</li>
            <li>- Teaching</li>
          </ul>
          <ul>
            {" "}
            <h2 >Learning</h2>
            <p>
              I am always learning:
            </p>
            <li>- New Technolgies</li>
            <li>- Certs + Usage</li>
            <li>- BA Linguistics/Eng</li>
          </ul>
          <ul>
            {" "}
            <h2 >Hobbies</h2>
            <p>I do stuff in the corporeal realm too:</p>
            <li>- Music</li>
            <li>- Running</li>
            <li>- Cooking</li>
          </ul>
        </div>
        <div className="right">
        <img data-tip data-for="portrait" src={portrait} alt="" />
        {/* <ReactTooltip
                className="tooltip"
                id="portrait"
                place="right"
                effect="solid"
              >
          <span>Boo</span>
          </ReactTooltip> */}
        </div>


      </div>
      <div className="nextPage">
        <a className="vert-move" href="#contact">
          <FaSortDown className="arrow-down" />
        </a>
      </div>
    </div>
  );
}
