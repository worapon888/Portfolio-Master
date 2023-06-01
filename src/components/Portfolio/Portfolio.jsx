import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Portfolio.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Portfolio = () => {
  return (
    <section className="portfolio r-wrapper" id="portfolio">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="header">Portfolio</span>
          <span className="primaryText">Most recent work</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <a className=" r-card" href={card.url}>
                  <img src={card.image} alt="home" />
                </a>
                <span className="secondaryText r-price"></span>
                <span className="primaryText">{card.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
