import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

let Default_Expenses = [
  {
    id: "e1",
    date: new Date(2023, 12, 11),
    title: "Tution Fee",
    amount: 150,
  },
  {
    id: "e2",
    date: new Date(2023, 12, 9),
    title: "Education Fee",
    amount: 2250,
  },
];

function App() {

  const[expenses, SetExpenses] = useState(Default_Expenses);
  

  const addExpenseHandler = (expense) =>{
    console.log(expense);
    const upDatedExpense = [expense, ...expenses]
    SetExpenses(upDatedExpense);
  }


  return (
    <>
      <div className="one">
        <h1>Expense Tracker</h1>
      </div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
