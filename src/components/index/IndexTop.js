import { Component } from "react";
import Slider from "react-slick";

// import Slide1BG from "../../assets/medias/imgs/index/top/slide-bg-1.jpg";
// import Slide2BG from "../../assets/medias/imgs/index/top/slide-bg-2.jpg";
// import Slide3BG from "../../assets/medias/imgs/index/top/slide-bg-3.jpg";

class IndexTop extends Component {
  constructor(props) {
    super(props);

    this.createIndexTopSlide = this.createIndexTopSlide.bind(this);
  }

  createIndexTopSlide(props) {
    return (
      <div
        className="index-top-slide-bg lazyload blur-up"
        id={props.indexTopBGID}
        data-bg={props.indexTopBG}
      ></div>
    );
  }

  render() {
    const INDEX_TOP_SETTINGS = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      fade: true,
      autoplaySpeed: 4500,
    };

    return (
      <div id="indexTop">
        <Slider {...INDEX_TOP_SETTINGS}>
          <this.createIndexTopSlide
            indexTopBG="https://rtsyvisuals.com/RTSYVisualIMAGES/index/top/slide-bg-1.jpg"
            indexTopBGID="iTS1"
          />
          <this.createIndexTopSlide
            indexTopBG="https://rtsyvisuals.com/RTSYVisualIMAGES/index/top/slide-bg-2.jpg"
            indexTopBGID="iTS2"
          />
          <this.createIndexTopSlide
            indexTopBG="https://rtsyvisuals.com/RTSYVisualIMAGES/index/top/slide-bg-3.jpg"
            indexTopBGID="iTS3"
          />
        </Slider>

        <div className="index-top-cnt-main">
          <div
            className="index-top-cnt-main-inner AOS_FADE"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="900"
          >
            <h2 className="page-transition">Pronounced Artsy.</h2>

            <h5 className="page-transition">Rick Dingwall Photography</h5>

            <div className="page-transition">
              <a href="#info_jumper" className="page-transition">
                About Me
              </a>

              <a href="#work_jumper" className="page-transition">
                My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexTop;
