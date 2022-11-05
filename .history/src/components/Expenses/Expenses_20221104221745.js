import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "./NewExpense/NewExpense";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <NewExpense />
      {props.item.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            title2={expense.title2}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
