import React from "react";

const ExpenseDate = (props) => {
  const { month, year, day } = props;
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
