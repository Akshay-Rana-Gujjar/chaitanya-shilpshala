import "./index.css";
import facebook from "../Images/Socialicons/facebook.svg";
import linkedin from "../Images/Socialicons/linkedin.svg";
import instagram from "../Images/Socialicons/instagram.svg";

function Contact() {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="contact-div" id="contact">
        <div className="mx-auto">
          <h4>CONTACT US</h4>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row- pl-5">
                <div className="col-3-1 text-left">
                  <div className="h5 font-weight-bold mb-3    ">
                    NEW BUSINESS
                  </div>
                  <div className="">PARIKSHIT RAGHAV</div>
                  <div className="">+91- 8527946332</div>
                  <div className="">parik.raghav@chaitanyashilpshala.com</div>
                </div>
                <div className="col-3-1 text-left mt-5">
                  <div className="h5 font-weight-bold mb-3    ">
                  CAREERS
                  </div>
                  <div className="">SHUBHAM BHATI</div>
                  <div className="">+91- 9718706365</div>
                  <div className="">shubham.bhati@chaitanyashilpshala.com</div>
                </div>
                <div className="col-3-1 text-left mt-5">
                  <div className="h5 font-weight-bold mb-3    ">
                  CS STUDIO
                  </div>
                  <div className="">ADDRESS- ITHUM, SECTOR-62 NOIDA</div>
                  <div className="">+91- 7982357754</div>
                  <div className="">studio@chaitanyashilpshala.com</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-sm-0">
              <form
                action=""
                className="mx-auto"
                autoComplete="off"
                onSubmit={formSubmit}
              >
                <label>Name</label>
                <input type="text" required />
                <label>Email</label>
                <input type="email" required />
                <label>Message </label>
                <textarea name="message" cols="30" rows="5" required></textarea>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>

          <div className="social-div d-flex justify-content-around mx-auto">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="image" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedin} alt="image" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="image" />
            </a>
          </div>
          <p className="copyright">
            Copyright | <span className="base-font">Chetanya Shilpshala</span> |
            2021
          </p>
        </div>
      </div>
    </>
  );
}
export default Contact;
