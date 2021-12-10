import { Component } from "react";
import PortraitsModals from "./PortraitsModals";

class PortraitsMain extends Component {
  constructor(props) {
    super(props);

    this.createPortraitItemBG = this.createPortraitItemBG.bind(this);
  }

  createPortraitItemBG(props) {
    return (
      <div
        className="portraits-item-bg lazyload blur-up"
        data-bg={props.portraitsItemBG}
        id={props.portraitsItemBgID}
      />
    );
  }

  openPortModal(modal) {
    modal.style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  render() {
    return (
      <div id="portraitsMain">
        <div className="portraits-main-cnt">
          <div className="container-fluid portraits-main-cnt-box">
            <div className="row portraits-main-cnt-row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portraits-main-cnt-item">
                <div
                  className="portraits-main-cnt-item-inner"
                  onClick={() =>
                    this.openPortModal(document.getElementById("portMOne"))
                  }
                >
                  <this.createPortraitItemBG
                    portraitsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-1.jpg"
                    portraitsItemBgID="pIBGOne"
                  />

                  <div className="portraits-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portraits-main-cnt-item">
                <div
                  className="portraits-main-cnt-item-inner"
                  onClick={() =>
                    this.openPortModal(document.getElementById("portMTwo"))
                  }
                >
                  <this.createPortraitItemBG
                    portraitsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-2.jpg"
                    portraitsItemBgID="pIBGTwo"
                  />

                  <div className="portraits-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portraits-main-cnt-item">
                <div
                  className="portraits-main-cnt-item-inner"
                  onClick={() =>
                    this.openPortModal(document.getElementById("portMThree"))
                  }
                >
                  <this.createPortraitItemBG
                    portraitsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-3.jpg"
                    portraitsItemBgID="pIBGThree"
                  />

                  <div className="portraits-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portraits-main-cnt-item">
                <div
                  className="portraits-main-cnt-item-inner"
                  onClick={() =>
                    this.openPortModal(document.getElementById("portMFour"))
                  }
                >
                  <this.createPortraitItemBG
                    portraitsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-4.jpg"
                    portraitsItemBgID="pIBGFour"
                  />

                  <div className="portraits-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portraits-main-cnt-item">
                <div
                  className="portraits-main-cnt-item-inner"
                  onClick={() =>
                    this.openPortModal(document.getElementById("portMFive"))
                  }
                >
                  <this.createPortraitItemBG
                    portraitsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-5.jpg"
                    portraitsItemBgID="pIBGFive"
                  />

                  <div className="portraits-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portraits-main-cnt-item">
                <div
                  className="portraits-main-cnt-item-inner"
                  onClick={() =>
                    this.openPortModal(document.getElementById("portMSix"))
                  }
                >
                  <this.createPortraitItemBG
                    portraitsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-6.jpg"
                    portraitsItemBgID="pIBGSix"
                  />

                  <div className="portraits-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PortraitsModals />
      </div>
    );
  }
}

export default PortraitsMain;
