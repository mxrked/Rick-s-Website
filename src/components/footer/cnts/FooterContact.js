import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterContact = () => {
  return (
    <div id="footerContact">
      <div className="footer-contact-holder">
        <div className="footer-contact-holder-set">
          <h5>Telephone</h5>

          <a href="tel:+13368162199" className="page-transition">
            1-336-816-2199
          </a>
        </div>
        <div className="footer-contact-holder-set">
          <div>
            <a
              href="https://www.facebook.com/RTSY.Visuals/"
              className="page-transition"
            >
              <FaFacebook />
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/rtsy.visuals/?hl=en"
              className="page-transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
