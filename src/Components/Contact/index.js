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
        <div className=" mx-auto">
            <h4>CONTACT US</h4>
            <form action=""  className="mx-auto" autoComplete="off" onSubmit={formSubmit}>
                <label>Name</label>
                <input type="text" required/>
                <label>Email</label>
                <input type="email" required/>
                <label>Message </label>
                <textarea name="message" cols="30" rows="5" required></textarea>
                <button type="submit">SUBMIT</button>
            </form>
            <div className="social-div d-flex justify-content-around mx-auto">
                <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="image"/></a>
                <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="image"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="image"/></a>
            </div>
            <p>Copyright | Chetanya Shilpshala | 2021</p>
        </div>
        </div>
        </>
    )
}
export default Contact;