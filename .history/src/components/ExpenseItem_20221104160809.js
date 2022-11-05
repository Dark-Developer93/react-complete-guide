import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>March 28th 2022</div>
      <div className="expense-item__description">
        <h2>{1 + 1}</h2>
        <div className="expense-item__price">$ 294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;