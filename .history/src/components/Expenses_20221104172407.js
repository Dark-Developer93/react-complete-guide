import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
