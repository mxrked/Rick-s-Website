import Aos from "aos";
import { useEffect } from "react";
import {
  LARGE_TABLET_LANDSCAPE_MQ,
  LARGE_TABLET_PORTRAIT_MQ,
  MOBILE_LANDSCAPE_MQ,
  MOBILE_PORTRAIT_MQ,
  SMALL_TABLET_LANDSCAPE_MQ,
  SMALL_TABLET_PORTRAIT_MQ,
} from "../../GLOBAL/MediaQueries";

const AOSMain = () => {
  Aos.init({
    once: true,
    disable: "mobile",
  });

  useEffect(() => {
    function SMALL_DEVICES_FIX() {
      const MQS = [
        MOBILE_PORTRAIT_MQ,
        MOBILE_LANDSCAPE_MQ,
        SMALL_TABLET_PORTRAIT_MQ,
        SMALL_TABLET_LANDSCAPE_MQ,
        LARGE_TABLET_PORTRAIT_MQ,
        LARGE_TABLET_LANDSCAPE_MQ,
      ];

      for (var i = 0; i < MQS.length; i++) {
        if (MQS[i].matches) {
          document.querySelectorAll(".AOS_FADE").forEach((fade) => {
            fade.style.opacity = 1;
            fade.style.transform = "none";
          });
        }
      }
    }

    SMALL_DEVICES_FIX();

    window.addEventListener("resize", SMALL_DEVICES_FIX);
    window.addEventListener("load", SMALL_DEVICES_FIX);
  }, []);

  return "";
};

export default AOSMain;
