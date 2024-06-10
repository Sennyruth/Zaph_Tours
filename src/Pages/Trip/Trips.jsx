import adventuresImg from "../../assets/adventures.jpg";
import luxuriousImg from "../../assets/luxurious.jpg";
import wellnessImg from "../../assets/wellness.jpg";
import honeymoonImg from "../../assets/honeymoon.jpg";
import ecoImg from "../../assets/eco.jpg";
import culturalImg from "../../assets/cultural.jpg";
import beachImg from "../../assets/beach.jpg";
import familyImg from "../../assets/family.jpg";
import culinaryImg from "../../assets/culinary.jpg";
import blogImg from "../../assets/blog.jpg";
import "./Trips.css"

const Trips = () => {
  return (
    <section className="trip-section">
      <h1 className="trip-maintitle">Trip Types</h1>
      <div className="maintrip-container">

      <div className="trip-container ">
        <div className="container-text">
        <h3>Adventerous</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1200 per day</p>
        </div>
       
        <img src={adventuresImg} alt="" />
      </div>

      <div className="trip-container ">
        <div className="container-text">
        <h3>Luxury Vacations</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1700 per day</p>
        </div>
       
        <img src={luxuriousImg} alt="" />
      </div>

      <div className="trip-container">
        <div className="container-text">
        <h3>Wellness Retreats</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1600 per day</p>
        </div>
       
        <img src={wellnessImg} alt="" />
      </div>
      <div className="trip-container ">
        <div className="container-text">
        <h3>Honeymoon</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1200 per day</p>
        </div>
       
        <img src={honeymoonImg} alt="" />
      </div>
      <div className="trip-container">
        <div className="container-text">
        <h3>Eco-tours</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1000 per day</p>
        </div>
       
        <img src={ecoImg} alt="" />
      </div>
      <div className="trip-container ">
        <div className="container-text">
        <h3>Cultural Tours</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1600 per day</p>
        </div>
       
        <img src={culturalImg} alt="" />
      </div>
      <div className="trip-container">
        <div className="container-text">
        <h3>Beach Holidays</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1350 per day</p>
        </div>
       
        <img src={beachImg} alt="" />
      </div>
      <div className="trip-container ">
        <div className="container-text">
        <h3>Family</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1500 per day</p>
        </div>
       
        <img src={familyImg} alt="" />
      </div>
      <div className="trip-container">
        <div className="container-text">
        <h3>Culinary Tours</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1300 per day</p>
        </div>
       
        <img src={culinaryImg} alt="" />
      </div>
      <div className="trip-container ">
        <div className="container-text">
        <h3>wildlife Safaris</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aperiam laborum eius animi reprehenderit quia quam natus ad laboriosam
          atque.
        </p>
        <p className="prices">Price:@Ksh 1250 per day</p>
        </div>
       
        <img src={blogImg} alt="" />
      </div>
      </div>

      
    </section>
  );
};
export default Trips;
