//! Index Page

//* Components
import Navigation from "../components/nav/Navigation";
import IndexTop from "../components/index/IndexTop";
import IndexInfo from "../components/index/IndexInfo";
import IndexPortfolio from "../components/index/IndexPortfolio";
import IndexServices from "../components/index/IndexServices";

//* Assets

const HomeView = () => {
  return (
    <div id="indexBody">
      <Navigation />
      {/*<div id="testTop" />*/}

      <IndexTop />
      <IndexInfo />
      <IndexPortfolio />
      <IndexServices />
    </div>
  );
};

export default HomeView;
