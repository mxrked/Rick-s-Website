import { useEffect } from "react";
import { useLocation } from "react-router";

const OverflowYFix = () => {
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("popstate", () => {
      document.body.style.overflowY = "auto";
    });
  }, [location]);

  return "";
};

export default OverflowYFix;
