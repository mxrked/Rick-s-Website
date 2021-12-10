import { Component } from "react";
import ProjectionsModals from "./ProjectionsModals";

class ProjectionsMain extends Component {
  constructor(props) {
    super(props);

    this.createProjectionItemBG = this.createProjectionItemBG.bind(this);
  }

  createProjectionItemBG(props) {
    return (
      <div
        className="projections-item-bg lazyload blur-up"
        data-bg={props.projectionsItemBG}
        id={props.projectionsItemBgID}
      />
    );
  }

  openProjModal(modal) {
    modal.style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  render() {
    return (
      <div id="projectionsMain">
        <div className="projections-main-cnt">
          <div className="container-fluid projections-main-cnt-box">
            <div className="row projections-main-cnt-row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 projections-main-cnt-item">
                <div
                  className="projections-main-cnt-item-inner"
                  onClick={() =>
                    this.openProjModal(document.getElementById("projMOne"))
                  }
                >
                  <this.createProjectionItemBG
                    projectionsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-1.jpg"
                    projectionsItemBgID="prIBGOne"
                  />

                  <div className="projections-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 projections-main-cnt-item">
                <div
                  className="projections-main-cnt-item-inner"
                  onClick={() =>
                    this.openProjModal(document.getElementById("projMTwo"))
                  }
                >
                  <this.createProjectionItemBG
                    projectionsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-2.jpg"
                    projectionsItemBgID="prIBGTwo"
                  />

                  <div className="projections-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 projections-main-cnt-item">
                <div
                  className="projections-main-cnt-item-inner"
                  onClick={() =>
                    this.openProjModal(document.getElementById("projMThree"))
                  }
                >
                  <this.createProjectionItemBG
                    projectionsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-3.jpg"
                    projectionsItemBgID="prIBGThree"
                  />

                  <div className="projections-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 projections-main-cnt-item">
                <div
                  className="projections-main-cnt-item-inner"
                  onClick={() =>
                    this.openProjModal(document.getElementById("projMFour"))
                  }
                >
                  <this.createProjectionItemBG
                    projectionsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-4.jpg"
                    projectionsItemBgID="prIBGFour"
                  />

                  <div className="projections-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 projections-main-cnt-item">
                <div
                  className="projections-main-cnt-item-inner"
                  onClick={() =>
                    this.openProjModal(document.getElementById("projMFive"))
                  }
                >
                  <this.createProjectionItemBG
                    projectionsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-5.jpg"
                    projectionsItemBgID="prIBGFive"
                  />

                  <div className="projections-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 projections-main-cnt-item">
                <div
                  className="projections-main-cnt-item-inner"
                  onClick={() =>
                    this.openProjModal(document.getElementById("projMSix"))
                  }
                >
                  <this.createProjectionItemBG
                    projectionsItemBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-6.jpg"
                    projectionsItemBgID="prIBGSix"
                  />

                  <div className="projections-item-overlay page-transition">
                    <div>
                      <button className="page-transition">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectionsModals />
      </div>
    );
  }
}

export default ProjectionsMain;
