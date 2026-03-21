import type { Expense } from "../types/Expense";
import { formatCurrency } from "../utils/formatCurrency";
type Props = {
  expenses: Expense[];
};

const ExpensesTotal = ({ expenses }: Props) => {
  const total = expenses.reduce((curr, exp) => curr + exp.amount, 0);
  return (
    <div className="text-right">
      <p className="text-sm text-slate-500">Total Expenses</p>
      <h1 className="text-2xl font-bold text-blue-600">
        {formatCurrency(total)}
      </h1>
    </div>
  );
};
export default ExpensesTotal;
