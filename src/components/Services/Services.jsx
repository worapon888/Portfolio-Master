import React, { useState } from "react";
import "./Service.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services" id="services">
      <div className="services__header">
        <h1>Services</h1>

        <p>What i offer</p>
      </div>

      <div className="services__container">
        <div className="services__content">
          <i className="uil uil-web-grid services__icon"></i>
          <h3 className="services__title">
            Ui/Ux
            <br /> Designer
          </h3>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View more<i className="uil uil-arrow-right"></i>
          </span>
        </div>

        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">
            Codeing
            <br />
            Programing
          </h3>
          <span className="services__button">
            View more<i className="uil uil-arrow-right"></i>
          </span>
        </div>

        <div className="services__content">
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">
            Edit
            <br /> Debug
          </h3>
          <span className="services__button">
            View more<i className="uil uil-arrow-right"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
