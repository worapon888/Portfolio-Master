import React from "react";
import "./About.css";
import Info from "./Info";
import CV from "../../../public/CV.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <h1>About Me</h1>

        <p>My introduction</p>
      </div>
      <div className="about__container  ">
        <div className="about__left">
          <Info />
          <div className="container-des">
            <span className="text-des">
              Front-End developer, I create webpages with UI / UX design
              <br /> user interface, I have years experience and many clients
              <br />
              are happy withh the projects carried out.
            </span>
            <div className="btn">
              <a download="" href={CV}>
                <button className="button">download CV</button>
              </a>
            </div>
          </div>
        </div>
        <div className="about__right flexColStart">
          <img src="./Golf1_BW.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
