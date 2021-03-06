import React, { useState } from "react";
import "./styles.css";
import Navlogo from "../Images/nav-logo.png";
import logo from "../../Assets/Images/logo.png";
const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={Navlogo} alt="Logo" className="logo" />
          <span className="base-font">Chaitanya Shilpshala</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="landing" data-aos="slide-down" date-aos-duration="1000">
        <img src={logo} alt="src"/>
        <h1 className="base-font logo-heading mt-5">Chaitanya Shilpshala</h1>
      </div>
    </>
  );
};
export default Home;
