import Navigation from "../components/nav/Navigation";
import PackagesFAQ from "../components/packages/PackagesFAQ";
import PackagesTop from "../components/packages/PackagesTop";

const PackagesView = () => {
  return (
    <div id="packagesBody">
      <Navigation />

      <PackagesTop />
      <PackagesFAQ />
    </div>
  );
};

export default PackagesView;
