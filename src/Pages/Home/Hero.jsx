import "./Home.css";
const Hero = () => {
  return (
    <section className="Hero-section">
      <div className="hero-image">
        <video autoPlay loop muted className="video-background">
          <source src="src/assets/hero.vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>Best safaris and adventures</h1>
        </div>
      </div>
      
    </section>
  );
};
export default Hero;
