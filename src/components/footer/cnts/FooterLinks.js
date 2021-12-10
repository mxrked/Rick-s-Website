import { Component } from "react";
import { Link } from "react-router-dom";

class FooterLinks extends Component {
  constructor(props) {
    super(props);

    this.createFooterLink = this.createFooterLink.bind(this);
  }

  createFooterLink(props) {
    return (
      <li>
        <Link to={props.footerLinkTO} className="page-transition">
          {props.footerLinkTXT}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div id="footerLinks">
        <div className="footer-links-holder">
          <div className="footer-links-holder-set">
            <h5>General</h5>

            <ul>
              <this.createFooterLink
                footerLinkTO="/home"
                footerLinkTXT="Home"
              />
              <this.createFooterLink
                footerLinkTO="/about"
                footerLinkTXT="About Me"
              />
              <this.createFooterLink
                footerLinkTO="/packages"
                footerLinkTXT="Packages"
              />
              <this.createFooterLink
                footerLinkTO="/store"
                footerLinkTXT="Store"
              />
            </ul>
          </div>
          <div className="footer-links-holder-set">
            <h5>Services</h5>

            <ul>
              <this.createFooterLink
                footerLinkTO="/portraits"
                footerLinkTXT="Portraits"
              />
              <this.createFooterLink
                footerLinkTO="/projections"
                footerLinkTXT="Projections"
              />
              <this.createFooterLink
                footerLinkTO="/blacklight"
                footerLinkTXT="Blacklight"
              />
              <li>
                <a>&nbsp;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterLinks;
