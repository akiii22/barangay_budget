import type { Expense } from "../../types/Expense";
import { formatCurrency } from "../../utils/formatCurrency";
type Props = {
  expenses: Expense[];
};
const ExpensesTable = ({ expenses }: Props) => {
  return (
    <>
      <table className="w-full bg-white rounded-xl shadow-xl my-10 py-5">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-xl font-medium capitalize text-slate-800">
              Description
            </th>
            <th className="px-4 py-3 text-xl font-medium capitalize text-slate-800">
              Amount
            </th>
            <th className="px-4 py-3 text-xl font-medium capitalize text-slate-800">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          {expenses.map((expense) => (
            <tr
              key={expense.id}
              className="text-center transition hover:bg-gray-50 text-lg font-medium  "
            >
              <td className="py-4 px-2">{expense.description}</td>
              <td className="py-4 px-2">{formatCurrency(expense.amount)}</td>
              <td className="py-4 px-2">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ExpensesTable;
