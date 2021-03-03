import './index.css';
import projects1 from '../Images/Projects/projects-1.jpg';
import projects2 from '../Images/Projects/projects-2.jpg';
import projects3 from '../Images/Projects/projects-3.jpg';
import projects4 from '../Images/Projects/projects-4.jpg';
import projects5 from '../Images/Projects/projects-5.jpg';
import projects6 from '../Images/Projects/projects-6.jpg';
import projects7 from '../Images/Projects/projects-7.jpg';
import projects8 from '../Images/Projects/projects-8.jpg';

function Projects(){
    return(
        <>
            <h4 className="projects-head" id="projects">PROJECTS</h4>
            <div className="row project-imgs-div">
            <div className="column">
                <img src={projects1} alt="image" className="project-imgs"/>
                <img src={projects7} alt="image" className="project-imgs"/>
            </div>
            <div className="column">
                <img src={projects2} alt="image" className="project-imgs"/>
                <img src={projects6} alt="image" className="project-imgs"/>
            </div>
            <div className="column">
                <img src={projects3} alt="image" className="project-imgs"/>
                <img src={projects5} alt="image" className="project-imgs"/>
            </div>
            <div className="column">
                <img src={projects4} alt="image" className="project-imgs"/>
                <img src={projects8} alt="image" className="project-imgs"/>
            </div>
            </div>
        </>
    )
}
export default Projects;