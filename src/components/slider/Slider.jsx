import "./slider.scss";

import { useState } from "react";
import { SliderData } from "./SliderData";
import {
  FaAngleLeft,  FaAngleRight,
  FaGithub, FaCaretLeft, FaCaretRight
} from "react-icons/fa";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <section className="slider">
      <FaCaretLeft className="arrow left-arrow" onClick={prevSlide} />
      <FaCaretRight className="arrow right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <div className="left">
              <div className="title">
              <h3 className="font-face-ag">{slide.name}</h3>
              
              <p className="desc">{slide.desc}</p>
              </div>
          <br/>
              <div className="techs">
                <h4 className="font-face-ag">Project Built With</h4>
                <li>{slide.tech1}</li>
                <li>{slide.tech2}</li>
                <li>{slide.tech3}</li>
                </div>
              <div className="links">
                <a target="_blank" rel="noopener noreferrer" href={slide.link} className="liveLink font-face-ag">See it live</a>
                <a href={slide.repoLink} className="gitLink">
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="right">
              {index === current && (
                <img className="image" src={slide.image} alt="travel" />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
