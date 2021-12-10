import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div id="logoHolder">
      <Link to="/home" className="page-transition">
        <div>
          <h1 className="page-transition">RTSYVISUALS</h1>

          <p className="page-transition">Why be normal when you can be RTSY</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
