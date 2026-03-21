import ProjectTable from "../components/table/ProjectTable";
import { projects } from "../data/projects";
const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Projects</h1>

      <ProjectTable projects={projects} />
    </div>
  );
};
export default Projects;
