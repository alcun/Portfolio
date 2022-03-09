import { useRef, useState } from "react";
import { FaGithub, FaPause, FaPlay, FaSoundcloud } from "react-icons/fa";
import "./menu.scss";
import track1 from "./assets/bach.mp3";

export default function Menu({ menuOpen, setMenuOpen }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef(null);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      musicRef.current.volume = 0.5;
      musicRef.current.play();
    } else {
      setIsPlaying(false);
      musicRef.current.pause();
    }
  };

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li  onClick={() => setMenuOpen(false)}>
          <a className="font-face-ag" href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="font-face-ag" href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="font-face-ag" href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="font-face-ag"href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="font-face-ag"href="#contact">Contact</a>
        </li>
      </ul>

      <div className="linkButtons">
        <div className="musicLink">
          {isPlaying && <FaPause onClick={handlePlay} />}
          {!isPlaying && <FaPlay onClick={handlePlay} />}
                    
          <p><a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=2o5WonQc9CA'>credit</a></p>
        </div>
        <br />
        <div className="repoLink">
          <FaGithub />
          <p> <a target="_blank" rel="noopener noreferrer" href='https://github.com/alcun/Portfolio'>git repo</a></p>
        </div>
      </div>
      <audio ref={musicRef} src={track1}></audio>
    </div>
  );
}
