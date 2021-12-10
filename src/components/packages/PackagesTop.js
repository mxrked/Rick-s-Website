import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const PackagesTop = () => {
  return (
    <div id="packagesTop">
      <div className="packages-top-cnt">
        <h2>PACKAGES AND SESSIONS</h2>

        <p>
          There is no one size fits all when it comes to an empowering and artsy
          (RTSY) portraiture experience.
        </p>

        <p>
          Every photo session is customized to you. Upon booking, you will
          receive a digital posing guide and tips for finding just the right
          outfits to let your personality shine through. Before your session, we
          will do a full consultation to go discuss vision. We’ll figure out
          what makes you unique and accentuate those attributes.{" "}
        </p>

        <span>Also checkout my other creations.</span>

        <div>
          <Link to="/portraits" className="page-transition">
            Portraits
          </Link>

          <Link to="/projections" className="page-transition">
            Projections
          </Link>

          <Link to="/blacklight" className="page-transition">
            Blacklights
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PackagesTop);
