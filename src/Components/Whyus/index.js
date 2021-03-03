import './index.css';
import workload from '../Images/workload.svg';
import consulting from '../Images/consulting.svg';
import remoteOffice from '../Images/remote-office.svg';
import conversion from '../Images/conversion.svg';

function Whyus(){
    return(<>
    <div className="choose-div">
    <h4>WHY CHOOSE US?</h4>
        <div className="row">
        <div className="col-lg-6 col-12 sections">
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center"><img src={workload} alt="image" className="secimages pb-2"/></div>
                <div className="col-9 pl-0 section-desc">
                    <h6>TRANSFERING WORKLOAD</h6>
                    <p>Reducing your workload  of ongoing multiple projects. Here our aim is to provide a quality work with quantity of project workflows.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-12 sections">
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center"><img src={consulting} alt="image" className="secimages"/></div>
                <div className="col-9 pl-0 section-desc">
                    <h6>EMERGING AS A BIM CONSULTANT</h6>
                    <p>We can be presentedus as bim consultant for several office in india and abroad those who don't have the access and budget to afford bim services at their own office.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-12 sections">
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center"><img src={remoteOffice} alt="image" className="secimages"/></div>
                <div className="col-9 pl-0 section-desc">
                    <h6>PROVIDING REMOTE OFFICE FICILITY FOR BIM</h6>
                    <p>To provide bim facility for offices on remote basis by hiring people and allocating them for the office on project basis.(Like BIM Engineers)</p>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-12 sections">
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center"><img src={conversion} alt="image" className="secimages"/></div>
                <div className="col-9 pl-0 section-desc">
                    <h6>CONVERSION OF OLD ARCHITECTURE PRACTICES</h6>
                    <p>We can be presentedus as bim consultant for several office in india and abroad those who don't have the access and budget to afford bim services at their own office.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
        </>
    )
}
export default Whyus;