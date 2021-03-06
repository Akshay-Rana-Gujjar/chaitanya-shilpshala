import './index.css';
// import about from '../Images/about.jpg';

function About(){
    return(<>
        <div className="about" id="about">
            <div className="about-section">
            <h4>About us</h4>
            <p> <span className="base-font">Chaitanya Shilpshala</span> is founded by Ar.Parikshit Raghav in Year 2017.
            As the name suggest and soul ideology of the firm is” Conscious Design” which means designing every element with same intent consciousness as it needs.</p>
            <p>Ar.Parikshit Raghav is an alumni of University School of Architecture and Planning, GGSIPU, New Delhi and a registered Architect from Council of Architecture.In the span of an year we have done various projects ranging from Residential to commercial Retail.</p>
            <p>We provide services for Architecture, Interior Design Packages, Details Drawings, and Documentation.We also provide BIM Services in Revit Architecture.In this portfolio you will able to figure out various range of projects firm had executed.</p>
            </div>
        </div>
        <div className="team-section">
            <h4>Our Team</h4>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <img src="https://images.wallpaperscraft.com/image/leaves_green_plant_200636_240x320.jpg" alt="team"/>
                    <h5>Name</h5>
                    <p>Job Profile</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <img src="https://images.wallpaperscraft.com/image/leaves_green_plant_200636_240x320.jpg" alt="team"/>
                    <h5>Name</h5>
                    <p>Job Profile</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;