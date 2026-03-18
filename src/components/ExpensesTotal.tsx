import type { Expense } from "../types/Expense";
import { formatCurrency } from "../utils/formatCurrency";
type Props = {
  expenses: Expense[];
};

const ExpensesTotal = ({ expenses }: Props) => {
  const total = expenses.reduce((curr, exp) => curr + exp.amount, 0);
  return (
    <div className="px-4 py-6 bg-white">
      <h1 className="text-xl px-2 tracking-wide font-bold">
        Total expenses: {formatCurrency(total)}{" "}
      </h1>
    </div>
  );
};
export default ExpensesTotal;
