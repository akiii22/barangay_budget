import type { Projects } from "../../types/Projects";
import Statusbadge from "./Statusbadge";

type Props = {
  projects: Projects[];
};

const ProjectTable = ({ projects }: Props) => {
  return (
    <table className="w-full bg-white rounded-xl shadow-xl my-10 py-5">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-xl font-medium capitalize text-slate-800">
            Project
          </th>
          <th className="px-4 py-3 text-xl font-medium capitalize text-slate-800">
            Budget
          </th>
          <th className="px-4 py-3 text-xl font-medium capitalize text-slate-800">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-400">
        {projects.map((project) => (
          <tr key={project.id} className="transition hover:bg-gray-50">
            <td className="py-3 px-4 text-center">{project.name}</td>
            <td className="py-3 px-4 text-center">${project.budget}</td>
            <td className="py-3 px-4 text-center">
              <Statusbadge status={project.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProjectTable;
