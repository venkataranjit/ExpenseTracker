import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData, id:Math.random().toString()
      }
      console.log(expenseData);
      props.onAddExpense(expenseData);
    }
  return (
    <>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </>
  );
};

export default NewExpense;
