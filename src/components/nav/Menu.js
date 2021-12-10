import { Component } from "react";
import { FaCaretDown, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import CloseMenu from "../../assets/scripts/GLOBAL/CloseMenu";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.createMenuANCHORLink = this.createMenuANCHORLink.bind(this);
    this.createMenuLink = this.createMenuLink.bind(this);
  }

  createMenuANCHORLink(props) {
    return (
      <a href={props.linkTO} className="page-transition">
        {props.linkTXT}
      </a>
    );
  }

  createMenuLink(props) {
    return (
      <Link to={props.linkTO} className="page-transition" onClick={CloseMenu}>
        {props.linkTXT}
      </Link>
    );
  }

  componentDidMount() {
    const MENU_CB = document.getElementById("menuClickBlocker");
    const MENU_DARKEN = document.getElementById("menuDarken");
    const MENU = document.getElementById("menuLinks");
    const MENU_CNT = document.querySelector(".menu-links-cnt");
    MENU_CB.style.display = "none";
    MENU.style.display = "none";
    MENU.style.width = "0";
    MENU_CNT.classList.toggle("deactive");
    MENU_CNT.style.display = "none";
    MENU_DARKEN.style.display = "none";
    MENU_DARKEN.classList.toggle("deactive");

    const MENU_CHECKBOX = document.querySelector(".menu-links-cb");
    const LINK_SET = document.getElementById("linkSet");
    MENU_CHECKBOX.addEventListener("change", () => {
      if (MENU_CHECKBOX.checked) {
        LINK_SET.style.height = "150px";
      } else {
        LINK_SET.style.height = "0";
      }
    });
  }

  render() {
    return (
      <div id="menuHolder">
        <div id="menuClickBlocker" />

        <div id="menuDarken" className="full-second" onClick={CloseMenu} />

        <div id="menuLinks" className="full-second">
          <div className="menu-links-cnt page-transition">
            <div className="menu-links-top">
              <button id="menuCloser" onClick={CloseMenu}>
                Close <FaTimesCircle className="fa-icon" />
              </button>
            </div>

            <div className="menu-links-mid">
              <this.createMenuLink linkTO="home" linkTXT="Home" />

              <this.createMenuLink linkTO="about" linkTXT="About Me" />

              <label>
                <p>My Work</p> <FaCaretDown />
                <input type="checkbox" className="menu-links-cb" />
              </label>

              <div id="linkSet" className="page-transition">
                <this.createMenuLink linkTO="/portraits" linkTXT="Portraits" />
                <this.createMenuLink
                  linkTO="/projections"
                  linkTXT="Projections"
                />
                <this.createMenuLink
                  linkTO="/blacklight"
                  linkTXT="Blacklight"
                />
              </div>

              <this.createMenuLink linkTO="/packages" linkTXT="Packages" />

              <this.createMenuLink linkTO="/store" linkTXT="Store" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
