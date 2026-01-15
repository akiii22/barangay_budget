import ProjectTable from "../components/table/ProjectTable";
import { projects } from "../data/projects";
const Projects = () => {
  return (
    <div>
      <ProjectTable projects={projects} />
    </div>
  );
};
export default Projects;
