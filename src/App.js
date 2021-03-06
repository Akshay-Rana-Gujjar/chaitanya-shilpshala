import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './Components/Home';
import About from './Components/About';
import Whyus from './Components/Whyus';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Services from './Components/Services';
import HeroSection from './Components/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <>
    <Home/>
    <HeroSection/>
    <About/>
    <Services/>
    <Whyus/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;