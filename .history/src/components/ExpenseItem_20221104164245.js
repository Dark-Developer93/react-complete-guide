import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;
  const month = date.toLocaleDateString("en-US", { month: "long" })}
  const year = date.toLocaleDateString("en-US", { year: "numeric" })}
  const day = date.toLocaleDateString("en-US", { day: "numeric" })}
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
