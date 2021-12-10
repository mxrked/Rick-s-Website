import { useEffect } from "react";
// import Slide1 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-1.jpg";
// import Slide2 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-2.jpg";
// import Slide3 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-3.jpg";
// import Slide4 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-4.jpg";
// import Slide5 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-5.jpg";

const IMOne = () => {
  return (
    <div id="iMOne" className="index-modal">
      <div className="index-modal-darken page-transition" />

      <div className="index-modal-main">
        <div
          className="index-modal-main-cnt lazyload blur-up"
          data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-1.jpg"
        ></div>
      </div>
    </div>
  );
};

const IMTwo = () => {
  return (
    <div id="iMTwo" className="index-modal">
      <div className="index-modal-darken page-transition" />

      <div className="index-modal-main">
        <div
          className="index-modal-main-cnt lazyload blur-up"
          data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-2.jpg"
        ></div>
      </div>
    </div>
  );
};

const IMThree = () => {
  return (
    <div id="iMThree" className="index-modal">
      <div className="index-modal-darken page-transition" />

      <div className="index-modal-main">
        <div
          className="index-modal-main-cnt lazyload blur-up"
          data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-3.jpg"
        ></div>
      </div>
    </div>
  );
};

const IMFour = () => {
  return (
    <div id="iMFour" className="index-modal">
      <div className="index-modal-darken page-transition" />

      <div className="index-modal-main">
        <div
          className="index-modal-main-cnt lazyload blur-up"
          data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-4.jpg"
        ></div>
      </div>
    </div>
  );
};

const IMFive = () => {
  return (
    <div id="iMFive" className="index-modal">
      <div className="index-modal-darken page-transition" />

      <div className="index-modal-main">
        <div
          className="index-modal-main-cnt lazyload blur-up"
          data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-5.jpg"
        ></div>
      </div>
    </div>
  );
};

const IndexModals = () => {
  useEffect(() => {
    document.querySelectorAll(".index-modal").forEach((modal) => {
      modal.style.display = "none";
    });

    document.querySelectorAll(".index-modal-darken").forEach((darken) => {
      darken.addEventListener("click", () => {
        document.querySelectorAll(".index-modal").forEach((modal) => {
          modal.style.display = "none";
        });
        document.body.style.overflowY = "auto";
      });
    });
  }, []);

  return (
    <div id="indexModals">
      <IMOne />
      <IMTwo />
      <IMThree />
      <IMFour />
      <IMFive />
    </div>
  );
};

export default IndexModals;
