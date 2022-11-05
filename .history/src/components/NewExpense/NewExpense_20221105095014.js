import React {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpnese(expenseData);
  };
  const addNewExpenseHandler = (()=> {
    setIsEditing(true)
    
  })

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onclick={addNewExpenseHandler}>Add New Expense</button>}
      {isEditing&&<ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
