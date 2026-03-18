import ExpensesTotal from "../components/ExpensesTotal";
import ExpensesTable from "../components/table/ExpensesTable";
import { expenses } from "../data/expenses";
import { projects } from "../data/projects";
import { useState } from "react";
const Expenses = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <div>
      <select
        className="mb-4 p-2 rounded-lg cursor-pointer"
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
      <ExpensesTable
        expenses={
          selectedProject
            ? expenses.filter((exp) => exp.projectId === selectedProject)
            : expenses
        }
      />
      <ExpensesTotal
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
