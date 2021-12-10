import { useEffect } from "react";
import { useLocation } from "react-router";

const FixHome = () => {
  const location = useLocation();

  useEffect(() => {
    const GLOBAL_URL = window.location.href;

    if (
      GLOBAL_URL.indexOf("home") > -1 &&
      !sessionStorage.getItem("Fix Home")
    ) {
      document.location.reload();

      sessionStorage.setItem("Fix Home", true);
    }
  }, [location]);

  return "";
};

export default FixHome;
