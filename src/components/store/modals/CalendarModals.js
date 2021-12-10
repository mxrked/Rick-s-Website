import { Component } from "react";

class CalendarModals extends Component {
  constructor(props) {
    super(props);
    this.createCalendarImgModal = this.createCalendarImgModal.bind(this);
  }

  createCalendarImgModal(props) {
    return (
      <div
        className="store-product-modal calendar-modal"
        id={props.storeProductModalID}
      >
        <div className="calendar-modal-darken" />

        <div className="calendar-modal-cnt">
          <div
            className="calendar-modal-bg lazyload blur-up"
            data-bg={props.storeProductModalBG}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.querySelectorAll(".calendar-modal").forEach((modal) => {
      modal.style.display = "none";
    });

    document.querySelectorAll(".calendar-modal-darken").forEach((darken) => {
      darken.addEventListener("click", () => {
        document.querySelectorAll(".calendar-modal").forEach((modal) => {
          modal.style.display = "none";
        });

        document.body.style.overflowY = "auto";
      });
    });
  }

  render() {
    return (
      <div id="calendarModals">
        <this.createCalendarImgModal
          storeProductModalID="calendarM1"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM2"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM3"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM4"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM5"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM6"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM7"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM8"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM9"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM10"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM11"
          storeProductModalBG="#"
        />
        <this.createCalendarImgModal
          storeProductModalID="calendarM12"
          storeProductModalBG="#"
        />
      </div>
    );
  }
}

export default CalendarModals;
