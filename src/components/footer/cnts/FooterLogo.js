import { Link, withRouter } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div id="footerLogo">
      <div>
        <Link to="/home" className="page-transition">
          <h1>RTSYVISUALS</h1>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(FooterLogo);
