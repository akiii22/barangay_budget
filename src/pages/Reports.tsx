import { projects } from "../data/projects";
import { expenses } from "../data/expenses";
import { formatCurrency } from "../utils/formatCurrency";

const Reports = () => {
  const totalBudget = projects.reduce((sum, total) => (sum += total.budget), 0);
  const totalExpenses = expenses.reduce(
    (sum, total) => (sum += total.amount),
    0,
  );
  const remaining = totalBudget - totalExpenses;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Reports</h1>

        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 text-sm cursor-pointer"
        >
          Print Report
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">Total Budget</p>
          <h2 className="text-xl font-bold text-slate-800 mt-2">
            {formatCurrency(totalBudget)}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">Total Expenses</p>
          <h2 className="text-xl font-bold text-slate-800 mt-2">
            {formatCurrency(totalExpenses)}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">Remaining Budget</p>
          <h2
            className={`text-xl font-bold mt-2 ${
              remaining < 0 ? "text-red-500" : "text-green-600"
            }`}
          >
            {formatCurrency(remaining)}
          </h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Expenses per Project
        </h2>

        <div className="space-y-3">
          {projects.map((project) => {
            const total = expenses
              .filter((exp) => exp.projectId === project.id)
              .reduce((acc, curr) => (acc += curr.amount), 0);

            return (
              <div
                key={project.id}
                className="flex justify-between text-sm text-slate-700"
              >
                <span>{project.name}</span>
                <span className="font-medium">{formatCurrency(total)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reports;
