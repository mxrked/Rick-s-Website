import { useEffect } from "react";
import { useLocation } from "react-router";

const HidingPageLoader = () => {
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("Hide Page Loader")) {
      document.getElementById("pageLoaderHolder").style.display = "none";
    }
  }, [location]);

  return "";
};

export default HidingPageLoader;
