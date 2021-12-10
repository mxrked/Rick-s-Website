import AboutMain from "../components/about/AboutMain";
import AboutTop from "../components/about/AboutTop";
import Navigation from "../components/nav/Navigation";

const AboutView = () => {
  return (
    <div id="aboutBody">
      <Navigation />

      <AboutTop />
      <AboutMain />
    </div>
  );
};

export default AboutView;
