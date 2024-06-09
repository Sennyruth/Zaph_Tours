import alumni2Img from "../../assets/alumni2.jpg"
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FcRating } from "react-icons/fc";

const Testimonial = () => {
    return(
        <section className="testimonial">
            <h2 className="test-maintitle">Testimonials</h2>
            <div className="test-items">
            <div className="testimonials-container">
                <p className="quotes"><BiSolidQuoteAltRight /></p>
                <div className="test-rating">
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                </div>
                
                <p className="test-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati ea amet neque, at omnis aliquam eos consequuntur quos aut aspernatur suscipit ex delectus non beatae provident accusamus temporibus. Sed."</p>
            <h3>Diana Mwende</h3>
            <img src={ alumni2Img} alt="" />
            </div>
            <div className="testimonials-container">
                <p className="quotes"><BiSolidQuoteAltRight /></p>
                <div className="test-rating">
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                </div>
                
                <p className="test-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati ea amet neque, at omnis aliquam eos consequuntur quos aut aspernatur suscipit ex delectus non beatae provident accusamus temporibus. Sed."</p>
            <h3>Ruth Mutisya</h3>
            <img src={ alumni2Img} alt="" />
            </div>
            <div className="testimonials-container">
                <p className="quotes"><BiSolidQuoteAltRight /></p>
                <div className="test-rating">
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                </div>
                
                <p className="test-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati ea amet neque, at omnis aliquam eos consequuntur quos aut aspernatur suscipit ex delectus non beatae provident accusamus temporibus. Sed."</p>
            <h3>Lydia Mwangi</h3>
            <img src={ alumni2Img} alt="" />
            </div>
            <div className="testimonials-container">
                <p className="quotes"><BiSolidQuoteAltRight /></p>
                <div className="test-rating">
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                <p className="rating"><FcRating /></p>
                </div>
                
                <p className="test-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati ea amet neque, at omnis aliquam eos consequuntur quos aut aspernatur suscipit ex delectus non beatae provident accusamus temporibus. Sed."</p>
            <h3>Denzel Lawrence</h3>
            <img src={ alumni2Img} alt="" />
            </div>
            </div>
            
        </section>
    )

};

export default Testimonial;
