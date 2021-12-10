import { useEffect } from "react";
import { useLocation } from "react-router";

const ChangeNavigationBG = () => {
  const location = useLocation();

  useEffect(() => {
    const GLOBAL_URL = window.location.href;
    const NAV = document.getElementById("navigation");

    function navigationBGChange() {
      NAV.style.position = "relative";
      NAV.style.top = 0;
      NAV.style.backgroundColor = "rgb(32, 32, 32)";
    }

    function navigationDefault() {
      NAV.style.position = "fixed";
      NAV.style.top = 0;
      NAV.style.background = "transparent";
    }

    if (GLOBAL_URL.indexOf("home") > -1) {
      navigationDefault();

      window.addEventListener("scroll", () => {
        NAV.style.background = "transparent";
      });
    }

    if (
      GLOBAL_URL.indexOf("about") > -1 ||
      GLOBAL_URL.indexOf("portraits") > -1 ||
      GLOBAL_URL.indexOf("projections") > -1 ||
      GLOBAL_URL.indexOf("blacklight") > -1 ||
      GLOBAL_URL.indexOf("packages") > -1 ||
      GLOBAL_URL.indexOf("store") > -1
    ) {
      navigationBGChange();
    }
  }, [location]);

  return "";
};

export default ChangeNavigationBG;
