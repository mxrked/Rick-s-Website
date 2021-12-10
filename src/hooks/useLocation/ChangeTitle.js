import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ChangeTitle() {
  const location = useLocation();

  useEffect(() => {
    const GLOBAL_URL = window.location.href;

    if (GLOBAL_URL.indexOf("/home") > -1) {
      document.title = "rtsyvisuals.com | Home Page";
    }

    if (GLOBAL_URL.indexOf("/portraits") > -1) {
      document.title = "rtsyvisuals.com | Portraits Gallery";
    }

    if (GLOBAL_URL.indexOf("/projections") > -1) {
      document.title = "rtsyvisuals.com | Projections Gallery";
    }

    if (GLOBAL_URL.indexOf("/blacklight") > -1) {
      document.title = "rtsyvisuals.com | Blacklight Gallery";
    }

    if (GLOBAL_URL.indexOf("/packages") > -1) {
      document.title = "rtsyvisuals.com | Packages Page";
    }

    if (GLOBAL_URL.indexOf("/about") > -1) {
      document.title = "rtsyvisuals.com | About Page";
    }
  }, [location]);
}
