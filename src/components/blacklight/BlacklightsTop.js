import { Link } from "react-router-dom";

const BlacklightsTop = () => {
  return (
    <div id="blacklightsTop">
      <div className="blacklights-top-cnt">
        <h2>BLACKLIGHT</h2>

        <p>
          A collection of blacklights that were taken professionally by Rick
          Dingwall.
        </p>

        <span>Also checkout my other creations.</span>

        <div>
          <Link to="/portraits" className="page-transition">
            Portraits
          </Link>

          <Link to="/projections" className="page-transition">
            Projections
          </Link>

          <Link to="/packages" className="page-transition">
            Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlacklightsTop;
