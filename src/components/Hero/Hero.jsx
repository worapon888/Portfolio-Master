import React from "react";
import "./Herro.css";
import { AiOutlineMessage } from "react-icons/ai";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="hero hero-wrapper" id="hero">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="social">
          <Social />
        </div>
        {/* left side */}
        <div className="hero-left flexColStart ">
          <div className="image-container flexColStart">
            <img src="./Golf_BW.jpg" alt="Profile" className="hero_img" />
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className=" hero-des flexColStart">
            <h1>Worapon Jintajirakul</h1>
            <span>👨‍💻⌨️Front-End Developer⌨️👨‍💻</span>
            <p>
              I'm Front-End Developer based in Thailand, I'm very
              <br /> passtionate and dedicated to my work
            </p>
            <div className="btn">
              <a href="mailto:worapon088@gmail.com">
                <button className="button">
                  Say Hello <AiOutlineMessage />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
