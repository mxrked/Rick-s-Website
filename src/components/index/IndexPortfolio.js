import { Component, Fragment } from "react";
import Slider from "react-slick";

// import Slide1 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-1.jpg";
// import Slide2 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-2.jpg";
// import Slide3 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-3.jpg";
// import Slide4 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-4.jpg";
// import Slide5 from "../../assets/medias/imgs/index/portfolio/index-portfolio-slide-5.jpg";
import IndexModals from "./IndexModals";

class IndexPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  openModalOne() {
    document.getElementById("iMOne").style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  openModalTwo() {
    document.getElementById("iMTwo").style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  openModalThree() {
    document.getElementById("iMThree").style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  openModalFour() {
    document.getElementById("iMFour").style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  openModalFive() {
    document.getElementById("iMFive").style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  render() {
    const INDEX_PORTFOLIO_SETTINGS = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4500,
      draggable: false,
    };

    return (
      <div id="indexPortfolio">
        <div
          className="index-portfolio-slider-holder AOS_FADE"
          data-aos="fade-in"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          <Slider {...INDEX_PORTFOLIO_SETTINGS}>
            <div
              className="index-portfolio-slide lazyload blur-up"
              data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-1.jpg"
              id="IPS1"
            >
              <div
                className="index-portfolio-slide-cnt"
                onClick={this.openModalOne}
              >
                <button
                  className="index-portfolio-modal-view page-transition"
                  id="IPSS1"
                >
                  VIEW
                </button>
              </div>
            </div>
            <div
              className="index-portfolio-slide lazyload blur-up"
              data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-2.jpg"
              id="IPS2"
            >
              <div
                className="index-portfolio-slide-cnt"
                onClick={this.openModalTwo}
              >
                <button
                  className="index-portfolio-modal-view page-transition"
                  id="IPSS2"
                >
                  VIEW
                </button>
              </div>
            </div>
            <div
              className="index-portfolio-slide lazyload blur-up"
              data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-3.jpg"
              id="IPS3"
            >
              <div
                className="index-portfolio-slide-cnt"
                onClick={this.openModalThree}
              >
                <button
                  className="index-portfolio-modal-view page-transition"
                  id="IPSS3"
                >
                  VIEW
                </button>
              </div>
            </div>
            <div
              className="index-portfolio-slide lazyload blur-up"
              data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-4.jpg"
              id="IPS4"
            >
              <div
                className="index-portfolio-slide-cnt"
                onClick={this.openModalFour}
              >
                <button
                  className="index-portfolio-modal-view page-transition"
                  id="IPSS4"
                >
                  VIEW
                </button>
              </div>
            </div>
            <div
              className="index-portfolio-slide lazyload blur-up"
              data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/portfolio/index-portfolio-slide-5.jpg"
              id="IPS5"
            >
              <div
                className="index-portfolio-slide-cnt"
                onClick={this.openModalFive}
              >
                <button
                  className="index-portfolio-modal-view page-transition"
                  id="IPSS5"
                >
                  VIEW
                </button>
              </div>
            </div>
          </Slider>
        </div>

        <a id="work_jumper" />
        <IndexModals />
      </div>
    );
  }
}

export default IndexPortfolio;
