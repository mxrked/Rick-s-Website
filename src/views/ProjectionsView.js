import Navigation from "../components/nav/Navigation";
import ProjectionsMain from "../components/projections/ProjectionsMain";
import ProjectionsTop from "../components/projections/ProjectionsTop";

const ProjectionsView = () => {
  return (
    <div id="projectionsBody">
      <Navigation />

      <ProjectionsTop />
      <ProjectionsMain />
    </div>
  );
};

export default ProjectionsView;
