import { FaCopyright } from "react-icons/fa";
import FooterContact from "./cnts/FooterContact";
import FooterLinks from "./cnts/FooterLinks";
import FooterLogo from "./cnts/FooterLogo";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer-box">
        <div className="row footer-row">
          <div className="col-12 footer-side" id="footerTop">
            <div className="footer-side-cnt">
              <FooterLogo />
            </div>
          </div>

          <div
            className="col-lg-7 col-md-7 col-sm-6 col-xs-12 footer-side"
            id="footerMidL"
          >
            <div className="footer-side-cnt">
              <FooterLinks />
            </div>
          </div>

          <div
            className="col-lg-5 col-md-5 col-sm-6 col-xs-12 footer-side"
            id="footerMidR"
          >
            <div className="footer-side-cnt">
              <FooterContact />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 footer-bottom" id="footerBottom">
        <div>
          <FaCopyright /> <p>Copyright 2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
