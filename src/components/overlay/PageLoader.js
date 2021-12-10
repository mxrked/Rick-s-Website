import { useEffect } from "react";

const PageLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem("Hide Page Loader")) {
        document
          .getElementById("pageLoaderMainCnt")
          .classList.toggle("deactive");
        document.getElementById("pageLoaderMain").classList.toggle("deactive");
      }
    }, 6400);

    document.getElementById("stuckHint").classList.toggle("deactive");
    document.getElementById("stuckHint").style.display = "none";

    setTimeout(() => {
      document.getElementById("stuckHint").style.display = "none";
    }, 1500);

    setTimeout(() => {
      document.getElementById("stuckHint").classList.remove("deactive");
    }, 4500);

    document.getElementById("hidePageLoader").addEventListener("click", () => {
      document.getElementById("pageLoaderHolder").style.display = "none";
    });
  }, []);

  return (
    <div id="pageLoaderHolder">
      <div id="pageLoaderClickBlocker" />

      <div id="pageLoaderMain" className="full-second">
        <div id="pageLoaderMainCnt" className="page-transition">
          <span id="pageLoaderPerc">100%</span>

          <div id="stuckHint" className="full-second">
            <p>Stuck on 100%?</p>

            <button id="hidePageLoader">Hide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
