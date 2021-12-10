import { Component } from "react";
import BlacklightsModals from "./BlacklightModals";

class BlacklightsMain extends Component {
  constructor(props) {
    super(props);

    this.createBlacklightsItemBG = this.createBlacklightsItemBG.bind(this);
  }

  createBlacklightsItemBG(props) {
    return (
      <div
        className="blacklights-item-bg lazyload blur-up"
        data-bg={props.blacklightsItemBG}
        id={props.blacklightsItemBgID}
      />
    );
  }

  openBLModal(modal) {
    modal.style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  render() {
    return (
      <div id="blacklightsMain">
        <div className="blacklights-main-cnt">
          <div className="container-fluid blacklights-main-cnt-box">
            <div className="row blacklights-main-cnt-row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blacklights-main-cnt-item">
                <div
                  className="blacklights-main-cnt-item-inner"
                  onClick={() =>
                    this.openBLModal(document.getElementById("bLMOne"))
                  }
                >
                  <this.createBlacklightsItemBG
                    blacklightsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-1.jpg"
                    blacklightsItemBgID="bLIBGOne"
                  />

                  <div className="blacklights-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blacklights-main-cnt-item">
                <div
                  className="blacklights-main-cnt-item-inner"
                  onClick={() =>
                    this.openBLModal(document.getElementById("bLMTwo"))
                  }
                >
                  <this.createBlacklightsItemBG
                    blacklightsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-2.jpg"
                    blacklightsItemBgID="bLIBGTwo"
                  />

                  <div className="blacklights-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blacklights-main-cnt-item">
                <div
                  className="blacklights-main-cnt-item-inner"
                  onClick={() =>
                    this.openBLModal(document.getElementById("bLMThree"))
                  }
                >
                  <this.createBlacklightsItemBG
                    blacklightsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-3.jpg"
                    blacklightsItemBgID="bLIBGThree"
                  />

                  <div className="blacklights-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blacklights-main-cnt-item">
                <div
                  className="blacklights-main-cnt-item-inner"
                  onClick={() =>
                    this.openBLModal(document.getElementById("bLMFour"))
                  }
                >
                  <this.createBlacklightsItemBG
                    blacklightsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-4.jpg"
                    blacklightsItemBgID="bLIBGFour"
                  />

                  <div className="blacklights-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blacklights-main-cnt-item">
                <div
                  className="blacklights-main-cnt-item-inner"
                  onClick={() =>
                    this.openBLModal(document.getElementById("bLMFive"))
                  }
                >
                  <this.createBlacklightsItemBG
                    blacklightsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-5.jpg"
                    blacklightsItemBgID="bLIBGFive"
                  />

                  <div className="blacklights-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blacklights-main-cnt-item">
                <div
                  className="blacklights-main-cnt-item-inner"
                  onClick={() =>
                    this.openBLModal(document.getElementById("bLMSix"))
                  }
                >
                  <this.createBlacklightsItemBG
                    blacklightsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-6.jpg"
                    blacklightsItemBgID="bLIBGSix"
                  />

                  <div className="blacklights-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BlacklightsModals />
      </div>
    );
  }
}

export default BlacklightsMain;
