import ExpensesTotal from "../components/ExpensesTotal";
import ExpensesTable from "../components/table/ExpensesTable";
import { expenses } from "../data/expenses";
import { projects } from "../data/projects";
import { useState } from "react";
const Expenses = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Expenses</h1>

      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex justify-between items-center">
        <select
          className="border px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          onChange={(e) => {
            const value = e.target.value;
            setSelectedProject(value === "all" ? null : Number(value));
          }}
        >
          <option value="all">All Projects</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <ExpensesTotal
          expenses={
            selectedProject
              ? expenses.filter((exp) => exp.projectId === selectedProject)
              : expenses
          }
        />
      </div>

      <ExpensesTable
        expenses={
          selectedProject
            ? expenses.filter((exp) => exp.projectId === selectedProject)
            : expenses
        }
      />
    </div>
  );
};
export default Expenses;
