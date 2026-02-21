import { useState } from "react";
import type { Projects } from "../../types/Projects";
import { formatCurrency } from "../../utils/formatCurrency";
import Statusbadge from "./Statusbadge";
import { IoCloseCircle } from "react-icons/io5";
type Props = {
  projects: Projects[];
};

const ProjectTable = ({ projects }: Props) => {
  const [selectedProjects, setSelectedProjects] = useState<Projects | null>(
    null,
  );
  return (
    <>
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
            <th className="px-4 py-3 text-xl font-medium capitalize text-slate-800">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          {projects.map((project) => (
            <tr
              key={project.id}
              className="transition hover:bg-gray-50 text-lg font-medium"
            >
              <td className="py-3 px-4 text-center">{project.name}</td>
              <td className="py-3 px-4 text-center">
                {formatCurrency(project.budget)}
              </td>
              <td className="py-3 px-4 text-center">
                <Statusbadge status={project.status} />
              </td>
              <td className="space-x-2 justify-center flex items-center py-5">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded cursor-pointer"
                  onClick={() => setSelectedProjects(project)}
                >
                  View
                </button>
                <button className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProjects && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-100 relative">
            <h2 className="text-center text-2xl font-semibold tracking-wider my-10">
              Project Details
            </h2>
            <div className="my-10 mx-10">
              <p className="text-lg py-3 mx-3">
                <strong className="mr-2 capitalize">Name:</strong>
                {selectedProjects.name}
              </p>
              <p className="text-lg py-3 mx-3">
                <strong className="mr-2 capitalize">Budget:</strong>
                {formatCurrency(selectedProjects.budget)}
              </p>
              <p className="text-lg py-3 mx-3">
                <strong className="mr-2 capitalize">Name:</strong>
                {selectedProjects.status}
              </p>
            </div>
            <button
              className="absolute top-5 right-6 cursor-pointer"
              onClick={() => setSelectedProjects(null)}
            >
              <IoCloseCircle
                className="text-red-500 transition duration-300 hover:rotate-180"
                size="32px"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ProjectTable;
