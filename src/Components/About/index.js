import "./styles.css";
import ourFirm from "../../assets/Images/about/our_firm.jpg";
import OUR_PHYLOSOPHY from "../../assets/Images/about/OUR_PHYLOSOPHY.png";
import team1 from "../../assets/Images/about/team1.png";
import team2 from "../../assets/Images/about/team2.png";
import client1 from "../../assets/Images/about/client1.png";
import client2 from "../../assets/Images/about/client2.png";
import certificate from "../../assets/Images/about/certificate.png";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-section">
        <h4>About us</h4>
        <div className="container pb-5">
          <div className="row d-flex align-items-center border glass-bg rounded" >
            <div className="col-md-6">
              <img src={ourFirm} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="text-center mb-3 mt-3 mt-md-0 font-weight-bold fs-4">
                OUR FIRM
              </div>
              <div className="mb-3 font-weight-bold">
                CHAITANYA SHILPSHALA IS A BIM MANAGEMENT, ARCHITECTURAL
                TECHNOLOGIST AND DOCUMENTATION SPECIALIST FIRM FOUNDED IN 2017
                LOCATED IN NOIDA, INDIA.
              </div>
              <div className="">
                WE ARE RAPIDLY GROWING IN THE AEC INDUSTRY AND PROVIDING STATE
                OF THE ART BIM SUPPORT AND DOCUMENTATION SERVICES ON DIVERSE
                RANGE OF PROJECTS TO MANY ESTABLISHED DESIGNERS AND
                ARCHITECTURAL PRACTICES INSHORE PAN INDIA AND OFFSHORE IN USA,
                UK, MIDDLE EAST AND CANADA.
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center border glass-bg rounded">
            <div className="col-md-6 order-sm-2">
              <img src={OUR_PHYLOSOPHY} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="text-center mb-3 mt-3 mt-md-0 font-weight-bold fs-4">
                OUR PHYLOSOPHY
              </div>
              <div className="mb-3 font-weight-bold">
                AS THE NAME SUGGEST CHAITANYA SHILPSHALA THE SOUL IDEOLOGY OF
                OUR FIRM IS ”CONSCIOUS DESIGN” WHICH MEANS DESIGNING EVERY
                ELEMENT WITH SAME INTENT OF PURE CONSCIOUSNESS AS IT NEEDS.
              </div>
              <div className="">
                WE FOCUS ON TIMELY DELIVERY OF THE PROJECTS AND CONSCIOUSLY
                PROCESS CLIENT’S NEED AND MAKE OUR EFFORTS MORE ELEGIBLE FOR THE
                CLIENT TO UNDERSTAND WITH MINIMAL INPUTS AND SELF DRIVEN DESIGN
                AND DETAILS
              </div>
            </div>
          </div>

          <div className="mt-5 border glass-bg rounded p-1 p-sm-5">
            <div className="fs-3 mb-4 text-center h3 font-weight-bold">
              LEADERSHIP (TEAM)
            </div>
            <div className="row mb-5 d-flex align-items-center">
              <div className="col-sm-6 text-center ">
                <img
                  src={team1}
                  className="img-fluid team-img rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-sm-6">
                <div className=" font-weight-bold h4 team-name mt-3 mt-sm-0">
                  PARIKSHIT RAGHAV (FOUNDING PARTNER)
                </div>
                <div className="mb-3 font-weight-bold ">
                  parik.raghav@chaitanyashilpshala.com
                </div>
                <div className="">
                  Parikshit is the founding partner of chaitanya shilpshala. He
                  started his journey for a conventional school of architecture
                  for University of Architecture and Planning, GGSIPU in Delhi,
                  India. He is a licensed Architect from the Council of
                  Architecture, India. After his education he is consistently
                  growing intellectually as well as experience wise in
                  architecture. He is someone who is modest in its approach and
                  who believes in conversation and critique that made me so
                  modest and resourceful. After observing the recent market
                  shift towards the advancement in the Architectural technology,
                  He entered into the BIM industry as a BIM Manager and followed
                  the process of thorough learning and observing recent industry
                  shifts. He worked in many designated leaders in theBIM
                  industry like Skets Studios PVT. LTD., Hoxton & Urban etc. and
                  gained the industry experience for several regions around the
                  globe like USA, UK, UAE, Austria, Australia, East Asia, Canada
                  and many more.
                </div>
                <div className="">
                  <br />
                  <span className="font-weight-bold mt-4">EDUCATION:</span>{" "}
                  UNIVERSITY SCHOOL OF ARCHITECTURE AND PLANNING, GGSIPU, DELHI,
                  INDIA
                </div>
                <div className="">
                  <br />
                  <span className="font-weight-bold mt-4">CERTIFICATION:</span>
                  <br />
                  <img
                    src={certificate}
                    alt=""
                    className="img-fluid certificate-img"
                  />
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-sm-6 text-center order-sm-2">
                <img
                  src={team2}
                  className="img-fluid team-img rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-sm-6 mt-3 mt-sm-0">
                <div className="text-center font-weight-bold h4 team-name">
                  SHUBHAM BHATI (MANAGING PARTNER)
                </div>
                <div className="mb-3 font-weight-bold text-center">
                  shubham.bhati@chaitanyashilpshala.com
                </div>
                <div className="">
                  Shubham is the Managing partner of Chaitanya Shilpshala. He
                  started his journey for a conventional school of architecture
                  for Lingayas University Faridabad, India. He is a licensed
                  Architect from the Council of Architecture, India. He has also
                  done his Master’s in Conservation from Sushant school of
                  Architecture. He has a keen hand in Indian Architecture and
                  Construction Technology and has been working on several
                  projects in India, managing construction typologies and
                  Construction sites. He is also indulged in Conservation
                  Projects and Heritage Conservation. He is currently
                  researching on Faridabad Heritage Structures of 17 th Century.
                  Recently observing the market shift towards the advancement in
                  the Architectural technology, He entered into the BIM industry
                  as a BIM technologist and gained the industry experience for
                  several regions around the globe like USA, UK, UAE, Austria,
                  Australia, East Asia, Canada and many more.
                </div>
                <div className="">
                  <br />
                  <span className="font-weight-bold mt-4">EDUCATION:</span>{" "}
                  BACELOR’S OF ARCHITECTURE FROM LINGAYAS UNIVERSITY, FARIDABAD,
                  INDIA MASTER’S IN CONSERVATION FROM SUSHANT SCHOOL OF
                  ARCHITECTURE, GURGAON, INDIA BIM CERTIFICATION FROM CAPRICOT,
                  INDIA
                </div>
                <div className="">
                  <br />
                  <span className="font-weight-bold mt-4">CERTIFICATION:</span>
                  <br />
                  <img
                    src={certificate}
                    alt=""
                    className="img-fluid certificate-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Clients and Partners */}
          <div className="mt-5 border glass-bg rounded p-1 p-sm-5">
            <div className="fs-3 mb-4 text-center h3 font-weight-bold">
              Clients and Partners
            </div>
            <div className="row mb-5 d-flex align-items-center justify-content-center">
              <div className="col-sm-2 text-center ">
                <img
                  src={client1}
                  className="img-fluid client-img rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-sm-2 text-center mt-3 mt-sm-0 ">
                <img
                  src={client2}
                  className="img-fluid client-img rounded-circle"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
