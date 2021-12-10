import { Component } from "react";

class PortraitsModals extends Component {
  constructor(props) {
    super(props);

    this.createPortraitModal = this.createPortraitModal.bind(this);
  }

  createPortraitModal(props) {
    return (
      <div className="portraits-modal" id={props.portraitsModalID}>
        <div className="portraits-modal-darken page-transition" />

        <div className="portraits-modal-main">
          <div
            className="portraits-modal-main-cnt lazyload blur-up"
            data-bg={props.portraitsModalBG}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.querySelectorAll(".portraits-modal").forEach((modal) => {
      modal.style.display = "none";
    });

    document.querySelectorAll(".portraits-modal-darken").forEach((darken) => {
      darken.addEventListener("click", () => {
        document.querySelectorAll(".portraits-modal").forEach((modal) => {
          modal.style.display = "none";
        });
        document.body.style.overflowY = "auto";
      });
    });
  }

  render() {
    return (
      <div id="portraitsModals">
        <this.createPortraitModal
          portraitsModalID="portMOne"
          portraitsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-1.jpg"
        />
        <this.createPortraitModal
          portraitsModalID="portMTwo"
          portraitsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-2.jpg"
        />
        <this.createPortraitModal
          portraitsModalID="portMThree"
          portraitsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-3.jpg"
        />
        <this.createPortraitModal
          portraitsModalID="portMFour"
          portraitsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-4.jpg"
        />
        <this.createPortraitModal
          portraitsModalID="portMFive"
          portraitsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-5.jpg"
        />
        <this.createPortraitModal
          portraitsModalID="portMSix"
          portraitsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/portraits/portrait-6.jpg"
        />
      </div>
    );
  }
}

export default PortraitsModals;
