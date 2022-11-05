import React from "react";

const ExpensesList = (props) => {
  let expenseContent = <p>No expenses found.</p>;
  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <div>{expenseContent}</div>;
};

export default ExpensesList;
