import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = <p>No expenses found.</p>;
  if (props.filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <div className="expenses-list">{expenseContent}</div>;
};

export default ExpensesList;
