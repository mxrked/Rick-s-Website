import { FaFacebook, FaInstagram } from "react-icons/fa";
//import InfoBG from "../../assets/medias/imgs/index/index-info.jpg";

const IndexInfo = () => {
  return (
    <div
      id="indexInfo"
      className="lazyload blur-up AOS_FADE"
      data-aos="fade-in"
      data-aos-delay="600"
      data-aos-duration="800"
      data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/index/index-info.jpg"
    >
      <a id="info_jumper" />
      <div className="index-info-cnt">
        <div className="index-info-cnt-top">
          <div>
            <h2>What makes me RTSY?</h2>

            <p>
              I focus on creating breathtaking portraits using interesting
              techniques involving color and light. You can view my work in the
              galleries . If you like what you see, consider booking a
              photography session with me.{" "}
            </p>
          </div>
        </div>

        <div className="index-info-cnt-sub">
          <div>
            <a
              href="https://www.facebook.com/RTSY.Visuals/"
              className="page-transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/rtsy.visuals/"
              className="page-transition"
            >
              <FaInstagram />
            </a>
          </div>

          <span>Reaching out to me.</span>
        </div>
      </div>
    </div>
  );
};

export default IndexInfo;
