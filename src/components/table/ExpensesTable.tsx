import type { Expense } from "../../types/Expense";
import { formatCurrency } from "../../utils/formatCurrency";
type Props = {
  expenses: Expense[];
};
const ExpensesTable = ({ expenses }: Props) => {
  return (
    <>
      <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-left">
              Description
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-center">
              Amount
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-600 text-center">
              Date
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-sm text-slate-700">
                {expense.description}
              </td>
              <td className="px-6 py-4 text-sm text-center font-medium text-slate-800">
                {formatCurrency(expense.amount)}
              </td>
              <td className="px-6 py-4 text-sm text-center text-slate-500">
                {expense.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ExpensesTable;
