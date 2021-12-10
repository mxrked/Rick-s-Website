import { Link } from "react-router-dom";

const PortraitsTop = () => {
  return (
    <div id="portraitsTop">
      <div className="portraits-top-cnt">
        <h2>PORTRAITS</h2>

        <p>
          A collection of portraits that were taken professionally by Rick
          Dingwall.
        </p>

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

export default PortraitsTop;
