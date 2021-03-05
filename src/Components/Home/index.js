import './index.css';
import Navlogo from '../Images/nav-logo.png';
import home from '../Images/home.jpg';

const Home = ()=>{
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#"><img src={Navlogo} alt="Logo" className="logo"/>Chaitanya Shilpshala</a>
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

    <div className="hero">
      <img src={home} alt="image"/>
      <h1>Best BIM Service</h1>
    </div>
    </>
    )
}
export default Home;