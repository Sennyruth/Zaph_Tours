import zaph6Img from "../../assets/zaph6.jpg"
import lnakuruImg from "../../assets/lnakuru.jpg"
import zaph7Img from "../../assets/zaph7.jpg"
import zaph8Img from "../../assets/zaph8.jpg"
import zaph5Img from "../../assets/zaph7.jpg"
import zaph3Img from "../../assets/zaph3.jpg"

const Fd = () => {
  return (
    <section className="dest">
      <h1 className = "fd-maintitle">Featured Destinations</h1>
      <div className="main-container">
      <div className="dest-container">
      <img src={zaph6Img } alt="" />
        <h2>Mt Kenya</h2>
        <h2>@ksh 3000</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          deleniti?
        </p>
        <button type="button">
            Book Now
        </button>
        
      </div>
      <div className="dest-container">
      <img src={lnakuruImg } alt="" />
        <h2>Lake Nakuru</h2>
        <h2>@ksh 2000</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          deleniti?
        </p>
        <button type="button">
            Book Now
        </button>
        
      </div><div className="dest-container">
      <img src={zaph7Img} alt="" />
        <h2>Tsavo West</h2>
        <h2>@ksh 3500</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          deleniti?
        </p>
        <button type="button">
            Book Now
        </button>
        
      </div>
      <div className="dest-container">
      <img src={zaph3Img } alt="" />
        <h2>Maasai Mara</h2>
        <h2>@ksh 6000</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          deleniti?
        </p>
        <button type="button">
            Book Now
        </button>
        
      </div>
      <div className="dest-container">
      <img src={zaph5Img } alt="" />
        <h2>Amboseli</h2>
        <h2>@ksh 4500</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          deleniti?
        </p>
        <button type="button">
            Book Now
        </button>
        
      </div>
      <div className="dest-container">
      <img src={zaph8Img } alt="" />
        <h2>Aberdare</h2>
        <h2>@ksh 6000</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          deleniti?
        </p>
        <button type="button">
            Book Now
        </button>
        
      </div>
      </div>
      
    </section>
  );
};
export default Fd;
