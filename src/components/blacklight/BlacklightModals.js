import { Component } from "react";

class BlacklightsModals extends Component {
  constructor(props) {
    super(props);

    this.createBlacklightModal = this.createBlacklightModal.bind(this);
  }

  createBlacklightModal(props) {
    return (
      <div className="blacklights-modal" id={props.blacklightsModalID}>
        <div className="blacklights-modal-darken page-transition" />

        <div className="blacklights-modal-main">
          <div
            className="blacklights-modal-main-cnt lazyload blur-up"
            data-bg={props.blacklightsModalBG}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.querySelectorAll(".blacklights-modal").forEach((modal) => {
      modal.style.display = "none";
    });

    document.querySelectorAll(".blacklights-modal-darken").forEach((darken) => {
      darken.addEventListener("click", () => {
        document.querySelectorAll(".blacklights-modal").forEach((modal) => {
          modal.style.display = "none";
        });
        document.body.style.overflowY = "auto";
      });
    });
  }

  render() {
    return (
      <div id="blacklightsModals">
        <this.createBlacklightModal
          blacklightsModalID="bLMOne"
          blacklightsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-1.jpg"
        />
        <this.createBlacklightModal
          blacklightsModalID="bLMTwo"
          blacklightsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-2.jpg"
        />
        <this.createBlacklightModal
          blacklightsModalID="bLMThree"
          blacklightsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-3.jpg"
        />
        <this.createBlacklightModal
          blacklightsModalID="bLMFour"
          blacklightsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-4.jpg"
        />
        <this.createBlacklightModal
          blacklightsModalID="bLMFive"
          blacklightsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-5.jpg"
        />
        <this.createBlacklightModal
          blacklightsModalID="bLMSix"
          blacklightsModalBG="https://rtsyvisuals.com/RTSYVisualIMAGES/blacklights/blacklight-6.jpg"
        />
      </div>
    );
  }
}

export default BlacklightsModals;
