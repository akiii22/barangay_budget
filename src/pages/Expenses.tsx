import ExpensesTable from "../components/table/ExpensesTable";
import { expenses } from "../data/expenses";
const Expenses = () => {
  return (
    <div>
      <ExpensesTable expenses={expenses} />
    </div>
  );
};
export default Expenses;
