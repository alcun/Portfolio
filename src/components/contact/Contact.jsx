import "./contact.scss";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import { FaArrowCircleUp, FaSortDown } from "react-icons/fa";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ed55tw",
        "template_5q8yo58",
        form.current,
        "user_rh5YFofV2laZtochZOHKD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="left">
          <img url="./shake.svg" alt="" />{" "}
        </div>
        <div className="right">
          <h1 className="font-face-ag">Contact</h1>
          <br />

          <p>Need something building?</p>
          <br />
          <p>Got something to share?</p>
          <br />
          <p>I would love to hear from you.</p>
          <br />
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" />

            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button
              className={"font-face-ag contactBtn " + (message && "hidden")}
              value="Send"
              type="submit"
            >
              Send
            </button>
            {message && (
              <span>
                Thanks for your message! <br /> I'll get back to you in a jiffy.
              </span>
            )}
          </form>
        </div>
      </div>

      <div className="nextPage">
        <a className="vert-move" href="#intro">
          <FaArrowCircleUp className="arrow-up" />
        </a>
      </div>
      <footer>
        © 2022 -&nbsp;
        <a href="https://alcun.github.io/Portfolio/">alcun</a>
      </footer>
    </div>
  );
}
