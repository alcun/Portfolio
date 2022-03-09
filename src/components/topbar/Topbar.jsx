import "./topbar.scss";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Topbar({
  menuOpen,
  setMenuOpen,
  power,
  setPower,
  Init,
}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className={"wrapper " + (!Init && "hidden")}>
        <div className="left">
          <a href="#intro" className="logo font-face-ag">
            {" "}
            AC.
          </a>
          <a href="#contact" className="itemContainer">
            <FaEnvelope className="icon" />
            <span>alasdair@talkwell.world</span>
          </a>
  
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
