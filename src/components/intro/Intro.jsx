import "./intro.scss";
import bg1 from "./assets/intro1.mkv";
import bg2 from "./assets/intro2.mkv";
import sound1 from "./assets/sound1.mp3";
import sound2 from "./assets/sound2.mp3";
import {
  FaPowerOff,
  FaSortDown,
  FaChevronDown,
  FaAngleDown,
} from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { init } from "ityped";

export default function Intro({ power, setPower, Init, setInit }) {
  const vidRef = useRef(null);
  const soundRef1 = useRef(null);
  const soundRef2 = useRef(null);
  const textRef = useRef("O");
  const [textTrigger, setTextTrigger] = useState();
  const [currentVid, setCurrentVid] = useState(bg1);

  useEffect(() => {
    if (Init) {
      init(textRef.current, {
        showCursor: true,
        backSpeed: 30,
        startDelay: 1500,
        backDelay: 1500,
        cursorChar: "_",
        loop: true,

        strings: [
          "Hello. Welcome to my site.",
          "My name is Alasdair - I'm a frontend developer and designer.",
          "I strive to build striking and functional user experiences.",
          "This site was made to showcase some skills and projects.",
          "Feel free to look around - you can begin by scrolling down or clicking the arrow icon.",
          "I hope you enjoy your time here :)",
          "You can listen to some music via the menu.",
          "If you like this site, you can fork it via the git repo.",
          "Get in touch via the contact form at the bottom.",
          "That's all for now. Peace!",
        ],
      });
    }
  }, [Init]);

  const handleClick1 = () => {
    vidRef.current.play();
    setPower(true);
    soundRef1.current.volume = 0.2;
    soundRef1.current.play();
  };

  const handleClick2 = () => {
    setCurrentVid(bg2);
    setInit(true);
    soundRef2.current.volume = 0.2;
    soundRef2.current.play();
    setTextTrigger(true);
  };

  const onKeyDown =(e) => {
    var input = "";
    if (e.keyCode === 13) {
      setCurrentVid(bg2);
      setInit(true);
      soundRef1.current.volume = 0.2;
      soundRef2.current.play();
    }
  }

  return (
    <div className="intro" id="intro">
      <div className="videoContainer" id="">
        <div className="btnContainer">
          <button
            tabIndex={0}
            type="submit"
            onClick={handleClick1}
            value=""
            className={"powerBtn " + (power && "hidden")}
          >
            <FaPowerOff className="pwrIcon" />
          </button>
          {power && (
            <div className="initBtn">

              <p className={"initP " + (Init && "hidden")}>
                Press
                <button
                  tabIndex={0}
                  onClick={handleClick2}
                  onKeyDown={onKeyDown}
                  className={"initBtn " + (Init && "hidden")}
                >
                  <BsArrowReturnLeft className="returnIcon" />
                </button>
                to initialise
              </p>
            </div>
          )}

          <div className={"movingText " + (!Init && "hidden")}>
            <p>
              &gt;&nbsp;<span ref={textRef}></span>
            </p>
          </div>
          <div className={"nextPage  " + (!Init && "hidden")}>
            <a className="vert-move" href="#skills">
              <FaSortDown className="arrow-down" />
            </a>
          </div>
        </div>

        <div className="videoPlayer">
          {!Init && (
            <video ref={vidRef} src={currentVid} muted type="video/mkv" />
          )}
          {Init && (
            <video
            tabIndex={-1}
              ref={vidRef}
              src={currentVid}
              muted
              loop
              autoPlay
              type="video/mkv"
            />
          )}
        </div>
      </div>
      <audio ref={soundRef1} src={sound2}></audio>
      <audio ref={soundRef2} src={sound1}></audio>
    </div>
  );
}
