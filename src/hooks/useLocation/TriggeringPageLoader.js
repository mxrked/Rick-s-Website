import { useEffect } from "react";
import { useLocation } from "react-router";

const TriggerPageLoader = () => {
  const location = useLocation();

  useEffect(() => {
    var counter = 0;

    const timer = setInterval(() => {
      counter = counter + 1;

      document.getElementById("pageLoaderPerc").textContent = counter + "%";

      if (counter === 100) {
        clearInterval(timer);

        setTimeout(() => {
          document.getElementById("pageLoaderClickBlocker").style.display =
            "none";
        }, 300);

        setTimeout(() => {
          sessionStorage.setItem("Hide Page Loader", true);
        }, 340);
      }
    }, 20);
  }, [location]);

  return "";
};

export default TriggerPageLoader;
