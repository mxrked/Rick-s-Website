import { Link } from "react-router-dom";

const AboutTop = () => {
  return (
    <div id="aboutTop">
      <div className="about-top-cnt">
        <h2>ABOUT RICK DINGWALL</h2>

        <blockquote>
          “Normal is not something to aspire to, it’s something to get away
          from” - Jodie Foster
        </blockquote>

        <span>Also checkout my other creations.</span>

        <div>
          <Link to="/projections" className="page-transition">
            Projections
          </Link>

          <Link to="/blacklight" className="page-transition">
            Blacklight
          </Link>

          <Link to="/packages" className="page-transition">
            Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
