import { Fragment } from "react";
import AOSMain from "../assets/scripts/cross-page/aos/AOSMain";
import Footer from "../components/footer/Footer";
import PageLoader from "../components/overlay/PageLoader";

const OnAllPages = () => {
  return (
    <div id="onAllPages">
      <PageLoader />
      <Footer />

      <Fragment>
        <AOSMain />
      </Fragment>
    </div>
  );
};

export default OnAllPages;
