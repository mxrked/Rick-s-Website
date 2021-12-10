import ChangeNavigationBG from "../hooks/useLocation/ChangeNavigationBG";
import ChangeTitle from "../hooks/useLocation/ChangeTitle";
import HidingPageLoader from "../hooks/useLocation/HidingPageLoader";
import OverflowYFix from "../hooks/useLocation/OverflowYFix";
import TriggerPageLoader from "../hooks/useLocation/TriggeringPageLoader";
import FixHome from "../hooks/useLocation/FixHome";
import ScrollToTop from "../hooks/useLocation/ScrollToTop";

const WithRouting = () => {
  ChangeTitle();

  return (
    <div>
      <ScrollToTop />
      <TriggerPageLoader />
      <HidingPageLoader />
      <ChangeNavigationBG />
      <OverflowYFix />
      <FixHome />
    </div>
  );
};

export default WithRouting;
