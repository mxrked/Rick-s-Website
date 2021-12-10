import Navigation from "../components/nav/Navigation";
import PortraitsTop from "../components/portraits/PortraitsTop";
import PortraitsMain from "../components/portraits/PortraitsMain";

const PortraitsView = () => {
  return (
    <div id="portraitsBody">
      <Navigation />

      <PortraitsTop />
      <PortraitsMain />
    </div>
  );
};

export default PortraitsView;
