
import zaph5Img from "../../assets/zaph5.jpg";
const About = () => {
  return (
    <section className="about-section">
        <h2 className="abt-maintitle">About Us</h2>
      <div className="about-content">
      <img src={zaph5Img} alt="Ruths image" /> 
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quae
          suscipit vitae quidem! Quisquam dolor optio voluptates! Minima, itaque
          possimus.
        </p>
        <button type="button" className="travel">Travel Now</button>
      </div>
    </section>
  );
};
export default About;
