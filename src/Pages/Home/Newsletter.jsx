import familyImg from "../../assets/family.jpg"
const Newsletter = () =>{
    return(
<div className="news-container">
<img src={ familyImg} alt="" />
<div className="news-items">
<h2 className="subtitle">Hey traveller, get 15%  OFF</h2>
    <p>Get 15% off your first order,plus travel hacks & other sustainable travel stuff.</p>
    <form>
<label htmlFor="">Your Email</label><br />
<input type="text" placeholder="Enter your email" className="input1" /><br />
<label for="offers">
<input type="checkbox" id="offers" name="offers"/>
    Keep me up to date on news and offers.
        </label>
        <button type="button" className="news-btn"> GET 15% OFF</button>
    </form>
</div>
    
</div>
    )
}
export default Newsletter;