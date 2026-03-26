import ProjectTable from "../components/table/ProjectTable";
import { projects } from "../data/projects";
import { expenses } from "../data/expenses";
const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Projects</h1>

      <ProjectTable projects={projects} expenses={expenses} />
    </div>
  );
};
export default Projects;
