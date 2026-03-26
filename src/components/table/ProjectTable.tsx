import { useState } from "react";
import type { Projects } from "../../types/Projects";
import type { Expense } from "../../types/Expense";
import { formatCurrency } from "../../utils/formatCurrency";
import StatusBadge from "./Statusbadge";
import { IoCloseCircle } from "react-icons/io5";
type Props = {
  projects: Projects[];
  expenses: Expense[];
};

const ProjectTable = ({ projects, expenses }: Props) => {
  const [selectedProjects, setSelectedProjects] = useState<Projects | null>(
    null,
  );
  return (
    <>
      <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-left">
              Project
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-center">
              Budget
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-center">
              Expenses
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-center">
              Remaining
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-center">
              Status
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {projects.map((project) => {
            const projectExpenses = expenses.filter(
              (exp) => exp.projectId === project.id,
            );
            const totalExpenses = projectExpenses.reduce(
              (sum, exp) => (sum += exp.amount),
              0,
            );
            const remaining = project.budget - totalExpenses;
            return (
              <tr key={project.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-slate-700">
                  {project.name}
                </td>

                <td className="px-6 py-4 text-sm text-center font-medium text-slate-800">
                  {formatCurrency(project.budget)}
                </td>
                <td className="px-6 py-4 text-sm text-center font-medium text-slate-800">
                  {formatCurrency(totalExpenses)}
                </td>
                <td
                  className={`px-6 py-4 text-sm text-center font-medium  ${remaining <= 0 ? "text-red-500" : "text-green-500"}`}
                >
                  {formatCurrency(remaining)}
                </td>

                <td className="px-6 py-4 text-center">
                  <StatusBadge status={project.status} />
                </td>

                <td className="px-6 py-4 flex justify-center gap-2">
                  <button
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-500 cursor-pointer"
                    onClick={() => setSelectedProjects(project)}
                  >
                    View
                  </button>

                  <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-500 cursor-pointer">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedProjects && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg w-100 p-6 relative">
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setSelectedProjects(null)}
            >
              <IoCloseCircle
                className="text-red-500 transition hover:rotate-180"
                size={28}
              />
            </button>

            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Project Details
            </h2>

            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {selectedProjects.name}
              </p>

              <p>
                <span className="font-medium">Budget:</span>{" "}
                {formatCurrency(selectedProjects.budget)}
              </p>

              <p>
                <span className="font-medium">Status:</span>{" "}
                {<StatusBadge status={selectedProjects.status} />}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProjectTable;
