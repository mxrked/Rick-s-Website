import { Component } from "react";

class ProjectionsModals extends Component {
  constructor(props) {
    super(props);

    this.createProjectionModal = this.createProjectionModal.bind(this);
  }

  createProjectionModal(props) {
    return (
      <div className="projections-modal" id={props.projectionsModalID}>
        <div className="projections-modal-darken page-transition" />

        <div className="projections-modal-main">
          <div
            className="projections-modal-main-cnt lazyload blur-up"
            data-bg={props.projectionsModalBG}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.querySelectorAll(".projections-modal").forEach((modal) => {
      modal.style.display = "none";
    });

    document.querySelectorAll(".projections-modal-darken").forEach((darken) => {
      darken.addEventListener("click", () => {
        document.querySelectorAll(".projections-modal").forEach((modal) => {
          modal.style.display = "none";
        });
        document.body.style.overflowY = "auto";
      });
    });
  }

  render() {
    return (
      <div id="projectionsModals">
        <this.createProjectionModal
          projectionsModalID="projMOne"
          projectionsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-1.jpg"
        />
        <this.createProjectionModal
          projectionsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-2.jpg"
          projectionsModalID="projMTwo"
        />
        <this.createProjectionModal
          projectionsModalID="projMThree"
          projectionsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-3.jpg"
        />
        <this.createProjectionModal
          projectionsModalID="projMFour"
          projectionsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-4.jpg"
        />
        <this.createProjectionModal
          projectionsModalID="projMFive"
          projectionsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-5.jpg"
        />
        <this.createProjectionModal
          projectionsModalID="projMSix"
          projectionsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/projections/projection-6.jpg"
        />
      </div>
    );
  }
}

export default ProjectionsModals;
