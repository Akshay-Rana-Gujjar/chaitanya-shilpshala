import React, { useState } from 'react';
import './index.css';
import Navlogo from '../Images/nav-logo.png';
import logo from './Assets/logo.png';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination,Navigation,Autoplay,EffectFade} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Residential from './Assets/Landing/HOUSING/housing.jpg';
import Commercial from './Assets/Landing/COMMERCIAL/commercial.jpg';
import Retail from './Assets/Landing/RETAIL/retail.jpg';
import Corporate from './Assets/Landing/CORPORATE/office.jpeg';
import Intitutional from './Assets/Landing/INSTITUTIONAL/institutional.png';
import Health from './Assets/Landing/HEALTHCARE/health.jpg';
import Industry from './Assets/Landing/URBAN/urban.jpg';

SwiperCore.use([Pagination,Navigation,Autoplay,EffectFade]);

const Home = ()=>{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#"><img src={Navlogo} alt="Logo" className="logo"/><span className="base-font">Chaitanya Shilpshala</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="landing">
      <img src={logo} alt="src"/>
      <h1 className="base-font">Chaitanya Shilpshala</h1>
    </div>

    <Swiper navigation autoplay effect="fade" pagination={{ clickable: true }}>
      <SwiperSlide>
        <img src={Residential} alt="img" className="residential"/><h1 className="residential-head">Residential</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Commercial} alt="img" className="commercial"/><h1 className="commercial-head">Commercial</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Retail} alt="img" className="retail"/><h1 className="retail-head">Retails</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Corporate} alt="img" className="corporate"/><h1 className="corporate-head">Corporate Offices</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intitutional} alt="img" className="intitutional"/><h1 className="intitutional-head">Institutional</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Health} alt="img" className="health"/><h1 className="health-head">Health care</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Industry} alt="img" className="industry"/><h1 className="industry-head">Industrial design</h1>
      </SwiperSlide>
    </Swiper>
    </>
  )
}
export default Home;