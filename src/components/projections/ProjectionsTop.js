import { Link } from "react-router-dom";

const ProjectionsTop = () => {
  return (
    <div id="projectionsTop">
      <div className="projections-top-cnt">
        <h2>PROJECTIONS</h2>

        <p>
          A collection of projections that were taken professionally by Rick
          Dingwall.
        </p>

        <span>Also checkout my other creations.</span>

        <div>
          <Link to="/portraits" className="page-transition">
            Portraits
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

export default ProjectionsTop;
