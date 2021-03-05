import './index.css';
import facebook from '../Images/Socialicons/facebook.svg';
import linkedin from '../Images/Socialicons/linkedin.svg';
import instagram from '../Images/Socialicons/instagram.svg';

function Contact(){
    const formSubmit = (e)=>{
        e.preventDefault();
    }
    return(
        <>
        <div className="contact-div" id="contact">
        <div className="mx-auto">
            <h4>CONTACT US</h4>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <address><i>
                        Email: <a href="mailto:webmaster@example.com">Chaitanya Shilpshala</a><br/>
                        Visit us at:<br/>
                        Example.com<br/>
                        Lorem ipsum<br/>
                        dolor sit amet</i>
                    </address>
                </div>
                <div className="col-lg-6 col-md-12">
                    <form action=""  className="mx-auto" autoComplete="off" onSubmit={formSubmit}>
                        <label>Name</label>
                        <input type="text" required/>
                        <label>Email</label>
                        <input type="email" required/>
                        <label>Message </label>
                        <textarea name="message" cols="30" rows="5" required></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
            
            <div className="social-div d-flex justify-content-around mx-auto">
                <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="image"/></a>
                <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="image"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="image"/></a>
            </div>
            <p className="copyright">Copyright | <span className="base-font">Chetanya Shilpshala</span> | 2021</p>
        </div>
        </div>
        </>
    )
}
export default Contact;