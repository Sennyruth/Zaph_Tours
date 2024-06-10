import coastImg from "../../assets/coast.jpg";
import thompsonImg from "../../assets/thompson .jpg";
import fourteenImg from "../../assets/fourteen.jpg";
import museumImg from "../../assets/museum.jpg";
import baringoImg from "../../assets/baringo.jpg";
import beachImg from "../../assets/beach.jpg";
import nairobiImg from "../../assets/nairobi.jpg";
import kilimanjaroImg from "../../assets/kilimanjaro.jpg";

import "./Destination.css";
const Destination = () => {
  return (
    <section className="destination-container">
      <h2 className="dest-maintitle">Available Destinations</h2>
      <div className="destcontainer-items">
      <div className="dest-container-items">
        <img src={coastImg} alt="" />
        <h2>Malindi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      <div className="dest-container-items">
        <img src={baringoImg} alt="" />
        <h2> Lake Baringo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      <div className="dest-container-items">
        <img src={fourteenImg} alt="" />
        <h2>Fourteen Falls</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      <div className="dest-container-items">
        <img src={beachImg} alt="" />
        <h2>Diani</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      <div className="dest-container-items">
        <img src={museumImg} alt="" />
        <h2>National Museum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      <div className="dest-container-items">
        <img src={thompsonImg} alt="" />
        <h2>Thompson Falls</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      <div className="dest-container-items">
        <img src={nairobiImg } alt="" />
        <h2>Nairobi National Park</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      <div className="dest-container-items">
        <img src={kilimanjaroImg} alt="" />
        <h2>Mt Kilimanjaro</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magnam odio ut numquam et. A iusto unde iure optio doloribus.
        </p>
        <p>
          <b>Price per group:</b>@Ksh 15,000
        </p>
        <p>
          <b>Price per Individual:</b>@Ksh 18,000
        </p>
        <button type="button">Book Now</button>
      </div>
      </div>
      
    </section>
  );
};
export default Destination;
