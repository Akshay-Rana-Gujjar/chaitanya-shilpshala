import './index.css';
import about from '../Images/about.jpg';

function About(){
    return(
        <div className="about" id="about">
            {/* <img src={about} alt="image"/> */}
            <div className="about-section">
            <h4>About us</h4>
            <p> Chaitanya Shilpshala is a founded by Ar.Parikshit Raghav in Year 2017.
            As the name suggest and soul ideology of the firm is” Conscious Design” which means designing every element with same intent consciousness as it needs.<br/><br/>
            Ar.Parikshit Raghav is an alumni of University School of Architecture and Planning, GGSIPU, New Delhi and a registered Architect from Council of Architecture.In the span of an year we have done various projects ranging from Residential to commercial Retail.<br/><br/>
            We provide services for Architecture, Interior Design Packages, Details Drawings, and Documentation.We also provide BIM Services in Revit Architecture.In this portfolio you will able to figure out various range of projects firm had executed.</p>
            </div>
        </div>
    )
}
export default About;