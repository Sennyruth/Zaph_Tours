import "./Contacts.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
// import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
const Contacts = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-maintitle">Contact Us</h2>
      <div className="nb-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d510564.65107988653!2d36.5177334104462!3d-1.3031873859975642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717765632384!5m2!1sen!2ske"
          width="600"
          height="450"
        ></iframe>
        <form className="contacts-form">
        <label htmlFor="fname">FullName</label>
          <br />
          <input type="text" id="fname" placeholder="fullname" />
          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <input type="text" id="email" placeholder="email address" />
          <br />
          <label htmlFor="courses">Subject</label>
          <br />
          <input type="text" id="email"/><br />
          <label htmlFor="text">Write a message</label><br />
          <textarea name="" id="text" rows="4" cols="20"></textarea>
          <button type="button" className="form-btn">Submit</button>
          </form>
      </div>
      <div className="touch">
        <h2 className="g-touch">Get in Touch:</h2>
      </div>
      <div className="gtouch-container">
      <div className="location-items"></div>
      <div className="address">
      <p className="location"><FaLocationDot /></p>
      <h2 className="location1">ADDRESS</h2>
      <h2>Zaph Tours and Travels Company</h2>
      <p>6950 S. Jordan Road
    </p>
    <p>  Centennial, CO 80112</p>
    <h2>Southern Colorado Office</h2>
    <p>4474 Barnes Road 
    </p>
    <p>Colorado Springs, CO 80917</p>
    <h2>Wyoming Office</h2>
    <p>308 Southwest Dr Unit E
    Cheyenne, WY 82007</p>
    <h2>Texas Office</h2>
    <p>1421 Wells Branch Pkwy. Ste 100
    Pflugerville, TX 78660</p>
      </div>
      <div className="call">
      <p className="location"><PiPhoneCallFill /></p>
      <h2>PHONE</h2>
      <h2>Special Promotions Call</h2>
      <p>+2547985674</p>
      <h2> Post-Trip Follow-Up</h2>
      <p>+2547985674</p>
      <h2>Reminder Call for Upcoming Trip</h2>
      <p>+2547985674</p>
      <h2>Last-Minute Deal Offer</h2>
      <p>+2547985674</p>
      <h2>Re-Engagement Call</h2>
      <p>+2547985674</p>

      </div>
      <div className="email">
      <p className="location"><MdEmail /></p>
        <h2>EMAIL</h2>
        <h2> Destination Highlight</h2>
        <p>info@zaphtours.com</p>
        <h2>Customer Testimonial</h2>
        <p>info@zaphtourstest.com</p>
        <h2>Travel Tips</h2>
        <p>info@traveltips.com</p>
        <h2>Seasonal Promotion</h2>
        <p>info@promition.com</p>
        <h2> Welcome Email</h2>
        <p>info@zaphtoursltd.com</p>
      </div>
      </div>
     
      <div className="social-media">
      <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaSquareXTwitter />
            </a>
            <a href="">
              <FaSquareInstagram />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
      </div>
    </section>
  );
};
export default Contacts;
