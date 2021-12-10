//! Store Page

//* Components
import Navigation from "../components/nav/Navigation";
import StoreMain from "../components/store/StoreMain";
import StoreTop from "../components/store/StoreTop";

//* Assets

const StoreView = () => {
  return (
    <div id="storeBody">
      <Navigation />
      {/*<div id="testTop" />*/}

      <StoreTop />
      <StoreMain />
    </div>
  );
};

export default StoreView;
