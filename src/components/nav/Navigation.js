import { useEffect } from "react";
import Menu from "./Menu";
import Links from "./sides/Links";
import Logo from "./sides/Logo";
import MenuToggler from "./sides/MenuToggler";

const Navigation = () => {
  useEffect(() => {
    function detectScrolled() {
      const Y = window.scrollY;

      if (Y >= 50) {
        document.getElementById("navigation").style.top = "-170px";
      } else {
        document.getElementById("navigation").style.top = 0;
      }
    }

    window.addEventListener("load", () => {
      detectScrolled();
    });

    window.addEventListener("scroll", () => {
      detectScrolled();
    });
  }, []);

  return (
    <div id="navigation" className="page-transition">
      <Menu />

      <div
        className="container-fluid navigation-box AOS_FADE page-transition"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <div className="row navigation-row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 order-lg-0 order-md-1 order-sm-1 order-1 navigation-side">
            <MenuToggler />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 order-lg-0 order-md-0 order-sm-0 order-0 navigation-side">
            <Logo />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 d-lg-grid d-md-grid d-sm-none d-none navigation-side">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
