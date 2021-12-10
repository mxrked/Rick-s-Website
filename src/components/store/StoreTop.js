import { Component } from "react";

class StoreTop extends Component {
  constructor(props) {
    super(props);

    this.createStoreTopBtn = this.createStoreTopBtn.bind(this);
  }

  createStoreTopBtn(props) {
    return (
      <button
        id={props.storeTopBtnID}
        className="store-top-btn page-transition"
      >
        {props.storeTopBtnTXT}
      </button>
    );
  }

  componentDidMount() {
    const ALL_STORE_TYPES = document.querySelectorAll(".store-products-type");

    ALL_STORE_TYPES.forEach((type) => {
      type.style.display = "block";
    });

    document.getElementById("sTAll").style.pointerEvents = "none";
    document.getElementById("sTAll").style.opacity = "0.5";

    function displayStoreType(type) {
      ALL_STORE_TYPES.forEach((t) => {
        t.style.display = "none";

        type.style.display = "block";
      });
    }

    function determineButtonState(btn) {
      const ALL_STORE_TOP_BTNS = document.querySelectorAll(".store-top-btn");

      ALL_STORE_TOP_BTNS.forEach((b) => {
        b.style.pointerEvents = "all";
        b.style.opacity = "1";

        btn.style.pointerEvents = "none";
        btn.style.opacity = "0.5";
      });
    }

    document.getElementById("sTAll").addEventListener("click", () => {
      ALL_STORE_TYPES.forEach((t) => {
        t.style.display = "block";
      });

      determineButtonState(document.getElementById("sTAll"));
    });

    document.getElementById("sTCalendars").addEventListener("click", () => {
      displayStoreType(document.getElementById("storeCalendars"));
      determineButtonState(document.getElementById("sTCalendars"));
    });
    document.getElementById("sTOther").addEventListener("click", () => {
      displayStoreType(document.getElementById("storeOther"));
      determineButtonState(document.getElementById("sTOther"));
    });
  }

  render() {
    return (
      <div id="storeTop">
        <div className="store-top-cnt">
          <h2>My Products</h2>

          <p>Browse through the different products that can be purchased.</p>

          <div>
            <this.createStoreTopBtn
              storeTopBtnID="sTAll"
              storeTopBtnTXT="View All"
            />
            <this.createStoreTopBtn
              storeTopBtnID="sTCalendars"
              storeTopBtnTXT="Calendars"
            />
            <this.createStoreTopBtn
              storeTopBtnID="sTOther"
              storeTopBtnTXT="Other"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StoreTop;
