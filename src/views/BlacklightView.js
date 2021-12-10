import BlacklightsMain from "../components/blacklight/BlacklightMain";
import BlacklightsTop from "../components/blacklight/BlacklightsTop";
import Navigation from "../components/nav/Navigation";

const BlacklightView = () => {
  return (
    <div id="blacklightBody">
      <Navigation />

      <BlacklightsTop />
      <BlacklightsMain />
    </div>
  );
};

export default BlacklightView;
