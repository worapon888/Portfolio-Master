import React from "react";
import "./Skils.css";
import { AnimatePresence } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h1>Skills</h1>

        <p>My technical level</p>
      </div>
      <div className="skills__container flexCenter">
        {/* Left side */}
        <div className="skills-left">
          <h3>Frontend developer</h3>

          <div className="skill__container">
            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>Html</span>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>Css</span>
              <p>Advanced</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>JavaScript</span>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>React</span>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>Sass</span>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>Vite</span>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>NextJs</span>
              <p>Basic</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="skills-right">
          <h3>Backend developer</h3>

          <div className="skill__container">
            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>NodeJs</span>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>Strapi</span>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>FireBase</span>
              <p>Basic</p>
            </div>

            <div className="skill">
              <i className="bx bx-badge-check"></i>
              <span>Git</span>
              <p>Basic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
