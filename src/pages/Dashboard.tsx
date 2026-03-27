import { projects } from "../data/projects";
import { expenses } from "../data/expenses";
import { formatCurrency } from "../utils/formatCurrency";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import { PiTrophyDuotone } from "react-icons/pi";
const Dashboard = () => {
  const totalBudget = projects.reduce(
    (sum, project) => sum + project.budget,
    0,
  );

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const remaining = totalBudget - totalExpenses;

  const urgentTasks = [
    "Drainage cleanup ongoing today",
    "Equipment delivery expected",
  ];

  const announcements = [
    "Road Repair will start next week",
    "Budget meeting scheduled on March 30",
  ];

  const projectSpending = projects.map((project) => {
    const total = expenses
      .filter((exp) => exp.projectId === project.id)
      .reduce((sum, exp) => sum + exp.amount, 0);

    return {
      name: project.name,
      total,
    };
  });

  const topProject = projectSpending.sort((a, b) => b.total - a.total)[0];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h1>

      <div className="bg-red-50 border border-red-200 p-5 rounded-xl mb-6">
        <h2 className="text-lg font-semibold text-red-600 mb-3 flex flex-row items-center gap-4">
          <span>
            <FaExclamationTriangle />
          </span>
          Urgent Today
        </h2>

        <ul className="space-y-2 text-sm text-red-700">
          {urgentTasks.map((task, index) => (
            <li key={index}>• {task}</li>
          ))}
        </ul>
      </div>

      {/* 💰 MAIN HIGHLIGHT */}
      <div className="bg-white p-8 rounded-xl shadow-sm mb-6 text-center">
        <p className="text-sm text-slate-500">Remaining Budget</p>

        <h2
          className={`text-3xl font-bold mt-2 ${
            remaining < 0 ? "text-red-500" : "text-green-600"
          }`}
        >
          {formatCurrency(remaining)}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span>
              <IoMegaphoneOutline size={23} />
            </span>
            Announcements
          </h2>

          <ul className="space-y-2 text-sm text-slate-700">
            {announcements.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-3">
            <span>
              <PiTrophyDuotone size={23} />
            </span>
            Top Spending Project
          </h2>

          {topProject ? (
            <div className="text-sm text-slate-700">
              <p className="font-medium text-base">{topProject.name}</p>
              <p className="mt-1 text-slate-500">
                {formatCurrency(topProject.total)} spent
              </p>
            </div>
          ) : (
            <p className="text-sm text-slate-500">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
