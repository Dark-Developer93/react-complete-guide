import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.toLocaleDateString("en-US", { year: "numeric" });
  const day = props.date.toLocaleDateString("en-US", { day: "numeric" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
