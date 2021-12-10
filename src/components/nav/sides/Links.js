import { Component } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

class Links extends Component {
  constructor(props) {
    super(props);

    this.createDTMLink = this.createDTMLink.bind(this);
  }

  createDTMLink(props) {
    return (
      <li>
        <Link to={props.linkTO} className="page-transition">
          {props.linkTXT}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div id="linksHolder">
        <div className="links-holder-inner">
          <div className="links-set">
            <div>
              PAGES <FaCaretDown />
            </div>

            <ul id="dropDownLinks">
              <this.createDTMLink linkTO="/home" linkTXT="Home" />
              <this.createDTMLink linkTO="/about" linkTXT="About Me" />
              <this.createDTMLink linkTO="/portraits" linkTXT="Portraits" />
              <this.createDTMLink linkTO="/projections" linkTXT="Projections" />
              <this.createDTMLink linkTO="/blacklight" linkTXT="Blacklight" />
              <this.createDTMLink linkTO="/packages" linkTXT="Packages" />
              <this.createDTMLink linkTO="/store" linkTXT="Store" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
