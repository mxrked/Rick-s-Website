import { Component } from "react";
import { withRouter } from "react-router-dom";

// import Portrait from "../../assets/medias/imgs/index/services/portrait.jpg";
// import Projection from "../../assets/medias/imgs/index/services/projection.jpg";
// import Blacklight from "../../assets/medias/imgs/index/services/blacklight.jpg";
// import Packages from "../../assets/medias/imgs/index/services/packages.jpg";

class IndexServices extends Component {
  constructor(props) {
    super(props);

    this.createIndexService = this.createIndexService.bind(this);
  }

  createIndexService(props) {
    return (
      <div className="index-service-item">
        <div
          className="index-service-item-bg lazyload blur-up"
          data-bg={props.iSBG}
          id={props.iSID}
        />
        <div className="index-service-item-cnt page-transition">
          <div className="index-service-item-cnt-inner">
            <span>{props.iSSPAN}</span>

            <div>
              <p className="page-transition">VIEW</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { history } = this.props;

    const ALL_INDEX_SERVICE_ITEMS = document.querySelectorAll(
      ".index-service-item"
    );

    function rerouteUserToService(e) {
      history.push("/" + e);
    }

    ALL_INDEX_SERVICE_ITEMS[0].addEventListener("click", () => {
      rerouteUserToService("portraits");
    });
    ALL_INDEX_SERVICE_ITEMS[1].addEventListener("click", () => {
      rerouteUserToService("projections");
    });
    ALL_INDEX_SERVICE_ITEMS[2].addEventListener("click", () => {
      rerouteUserToService("blacklight");
    });
    ALL_INDEX_SERVICE_ITEMS[3].addEventListener("click", () => {
      rerouteUserToService("packages");
    });
  }

  render() {
    return (
      <div id="indexServices">
        <div className="container-fluid index-services-box">
          <div
            className="row index-services-row AOS_FADE"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 index-service-item-holder">
              <this.createIndexService
                iSBG="https://rtsyvisuals.com/RTSYVisualIMAGES/index/services/portrait.jpg"
                iSID="iSIOne"
                iSSPAN="Portraits"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 index-service-item-holder">
              <this.createIndexService
                iSBG="https://rtsyvisuals.com/RTSYVisualIMAGES/index/services/projection.jpg"
                iSID="iSITwo"
                iSSPAN="Projections"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 index-service-item-holder">
              <this.createIndexService
                iSBG="https://rtsyvisuals.com/RTSYVisualIMAGES/index/services/blacklight.jpg"
                iSID="iSIThree"
                iSSPAN="Blacklight"
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 index-service-item-holder">
              <this.createIndexService
                iSBG="https://rtsyvisuals.com/RTSYVisualIMAGES/index/services/packages.jpg"
                iSID="iSIFour"
                iSSPAN="Packages"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexServices);
