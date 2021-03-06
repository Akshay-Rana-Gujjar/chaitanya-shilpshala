import './index.css';
import Modeling from '../Images/Services/modeling.svg';
import Document from '../Images/Services/document.svg';
import Conversion from '../Images/Services/conversion.svg';
import Software from '../Images/Services/software.svg';

function Services(){
    return(
    <>
    <div className="service-back-1" id="services">
        <div className="service-div">
            <h4>SERVICES WE OFFER</h4>
            <div className="service-cards mx-auto">
                <div className="card mx-auto" data-aos="flip-right" data-aos-duration="700" data-aos-delay="500">
                    <img src={Modeling} alt="image" className="mx-auto"/>
                    <h6>BIM Modeling (Any LOD)</h6>
                    <p>Concept Model | Architecture  | Structure | MEP | Revit Family and Content |  Existing As-Built | Shell Models | Site Modeling | Clash and Error Detection | Model Cleanup/ Revisions</p>
                </div>
                <div className="card mx-auto"  data-aos="flip-left" data-aos-duration="700" data-aos-delay="500">
                    <img src={Document} alt="image" className="mx-auto"/>
                    <h6>BIM Documentation (Any LOD)</h6>
                    <p>Working Drawings | CD/ Design Packages | Design Details | GFC Creation | Design Documentaion | Any BIM/ Revit Based Production</p>
                </div>
                <div className="card mx-auto"  data-aos="flip-right" data-aos-duration="700" data-aos-delay="500">
                    <img src={Conversion} alt="image" className="mx-auto"/>
                    <h6>BIM Conversions (Any LOD)</h6>
                    <p>CAD to Revit | PDF to Revit | Site Survey to Revit | Point cloud to Revit | Image to Revit</p>
                </div>
                <div className="card mx-auto"  data-aos="flip-left" data-aos-duration="700" data-aos-delay="500">
                    <img src={Software} alt="image" className="mx-auto"/>
                    <h6>SOFTWARE IMPLEMENTED</h6>
                    <p>AUTODESK REVIT (ALL VERSIONS) | NAVISWORKS | AUTODESK AUTOCAD (ALL VERSIONS) | POINTCLOUD | KETCHUP | V-RAY | LUMION | 3D MAX | ENSCAPE | ADOBE PHOTOSHOP | RHINO | INDESIGN</p>
                </div>
            </div>
        </div>
    </div>
    <div className="service-back-2"></div>
    <div className="service-back-3"></div>
    </>
    )
}
export default Services;