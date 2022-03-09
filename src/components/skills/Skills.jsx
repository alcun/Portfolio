import "./skills.scss";
import {
  FaLinux,
  FaHtml5,
  FaReact,
  FaSass,
  FaGitAlt,
  FaWordpressSimple,
  FaJsSquare,
  FaCss3,
  FaNode,
  FaSortDown,
} from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import ReactTooltip from "react-tooltip";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="font-face-ag">Skills</h1>

      <div className="iconContainer">
        <div className="icons">
          <div className="row">
            <div className="iconBox html">
              <FaHtml5 data-tip data-for="html" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="html"
                place="top"
                effect="solid"
              >
                <span>HTML5</span>
              </ReactTooltip>
            </div>

            <div className="iconBox css3">
              <FaCss3 data-tip data-for="css" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="css"
                place="top"
                effect="solid"
              >
                <span>CSS3</span>
              </ReactTooltip>
            </div>

            <div className="iconBox js">
              <FaJsSquare data-tip data-for="js" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="js"
                place="top"
                effect="solid"
              >
                <span>JavascriptEC6</span>
              </ReactTooltip>
            </div>

            <div className="iconBox react">
              <FaReact data-tip data-for="react" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="react"
                place="top"
                effect="solid"
              >
                <span>ReactJS</span>
              </ReactTooltip>
            </div>

            <div className="iconBox sass">
              <FaSass data-tip data-for="sass" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="sass"
                place="top"
                effect="solid"
              >
                <span>Sass/SCSS</span>
              </ReactTooltip>
            </div>
          </div>

          <div className="row">
            <div className="iconBox node">
              <FaNode data-tip data-for="node" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="node"
                place="top"
                effect="solid"
              >
                <span>NodeJS/NPM</span>
              </ReactTooltip>
            </div>

            <div className="iconBox git">
              <FaGitAlt data-tip data-for="git" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="git"
                place="top"
                effect="solid"
              >
                <span>Git/Github</span>
              </ReactTooltip>
            </div>

            <div className="iconBox wordpress">
              <FaWordpressSimple
                data-tip
                data-for="wordpress"
                className="icon bounce-7"
              />
              <ReactTooltip
                className="tooltip"
                id="wordpress"
                place="top"
                effect="solid"
              >
                <span>WordPress</span>
              </ReactTooltip>
            </div>

            <div className="iconBox bash">
              <SiGnubash data-tip data-for="bash" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="bash"
                place="top"
                effect="solid"
              >
                <span>BASH</span>
              </ReactTooltip>
            </div>

            <div className="iconBox linux">
              <FaLinux data-tip data-for="linux" className="icon bounce-7" />
              <ReactTooltip
                className="tooltip"
                id="linux"
                place="top"
                effect="solid"
              >
                <span>GNU/Linux</span>
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="nextPage">
        <a className="vert-move" href="#portfolio">
          <FaSortDown className="arrow-down" />
        </a>
      </div>
    </div>
  );
}
