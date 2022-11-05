import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;
  return (
    <div className="expense-item">
      <div>
        <div>{date.toLocaleDateString("en-US", { month: "long" })}</div>
        <div>{date.toLocaleDateString("en-US", { year: "numeric" })}</div>
        <div>{date.toLocaleDateString("en-US", { day: "numeric" })}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
