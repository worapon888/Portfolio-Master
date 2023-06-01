import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Header = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);
  const [Mobile, setMobile] = useState(true);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 98) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <section className={`${navbar ? "navbar active" : "navbar"} h-wrapper`}>
      <div className="navbar flexCenter innerWidth">
        <h1 className="logo">Worapon</h1>
        <div className={`flexCenter ${Mobile ? "h-menu" : "h-mobile"}`}>
          <ul
            className={`flexCenter ${Mobile ? "nav__list" : "nav__mobile"}`}
            onClick={() => setMobile(false)}
          >
            <Link to="hero" classID="hero">
              <i class="uil uil-estate icon"></i>
              <li className="nav__link active-link">Home</li>
            </Link>
            <Link to="about" classID="about">
              <i class="uil uil-user-circle  icon"></i>
              <li className="nav__link active-link">About</li>
            </Link>
            <Link to="skills" classID="skills">
              <i class="uil uil-palette  icon"></i>
              <li className="nav__link active-link">Skills</li>
            </Link>

            <Link to="services" classID="services">
              <i class="uil uil-code-branch  icon"></i>
              <li className="nav__link active-link">Services</li>
            </Link>
            <Link to="portfolio" classID="portfolio">
              <i class="uil uil-folder-network  icon"></i>
              <li className="nav__link active-link">Portfolio</li>
            </Link>
            <Link to="contact" classID="contact">
              <i class="uil uil-phone-alt  icon"></i>
              <li className="nav__link active-link">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="hamberger" onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <i class="uil uil-times"></i>
          ) : (
            <i class="uil uil-bars"></i>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
