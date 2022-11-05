import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
