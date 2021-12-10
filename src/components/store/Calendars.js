import { Component } from "react";

import OnlyFansLogo from "../../assets/medias/imgs/links/of-icon.svg";
import CalendarModals from "./modals/CalendarModals";

class Calendars extends Component {
  constructor(props) {
    super(props);

    this.createProductImg = this.createProductImg.bind(this);
    this.createProductLink = this.createProductLink.bind(this);
    this.createProductNameAndModel = this.createProductNameAndModel.bind(this);
    this.createProductImgModal = this.createProductImgModal.bind(this);
  }

  createProductImg(props) {
    return (
      <div className="store-product-img-holder">
        <img
          data-src={props.storeProductImg}
          className="lazyload blur-up"
          alt="Store Product"
        />
      </div>
    );
  }

  createProductLink(props) {
    return (
      <a href={props.storeProductLinkHREF} className="page-transition">
        <img
          data-src={props.storeProductLinkIMG}
          className="lazyload blur-up"
          alt="Link Img"
        />
      </a>
    );
  }

  createProductNameAndModel(props) {
    return (
      <div className="store-product-name-and-model">
        <h3>{props.storeProductName}</h3>

        <span>{props.storeProductModel}</span>
      </div>
    );
  }

  createProductImgModal(props) {
    return (
      <div
        className="store-product-modal calendar-modal"
        id={props.storeProductModalID}
      >
        <div className="store-product-modal-darken" />

        <div className="store-product-modal-cnt">
          <div
            className="store-product-modal-bg lazyload blur-up"
            data-bg={props.storeProductModalBG}
          />
        </div>
      </div>
    );
  }

  openCalendarModal(modal) {
    modal.style.display = "grid";
    document.body.style.overflowY = "hidden";
  }

  render() {
    return (
      <div id="storeCalendars" className="store-products-type">
        <div className="container-fluid store-calendars-box">
          <div className="row store-calendars-row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM1")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 1"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM2")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 2"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM3")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 3"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM4")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 4"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM5")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 5"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM6")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 6"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM7")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 7"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM8")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 8"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM9")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 9"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM10")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 10"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM11")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 11"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 store-calendar">
              <div className="store-calendar-cnt">
                <div className="store-product-img-holder">
                  <img
                    data-src="#"
                    className="lazyload blur-up"
                    alt="Store Product"
                    onClick={() =>
                      this.openCalendarModal(
                        document.getElementById("calendarM12")
                      )
                    }
                  />
                </div>

                <div className="store-calendar-details">
                  <this.createProductNameAndModel
                    storeProductName="Calendar 12"
                    storeProductModel="Model"
                  />

                  <div className="store-calendar-links">
                    <this.createProductLink
                      storeProductLinkHREF="#"
                      storeProductLinkIMG={OnlyFansLogo}
                    />
                  </div>

                  <div className="store-calendar-price-and-btn">
                    <span>$Price</span>

                    <div className="store-calendar-btn-fake">
                      Button Goes Here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CalendarModals />
      </div>
    );
  }
}

export default Calendars;
