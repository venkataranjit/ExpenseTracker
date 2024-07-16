import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {
            props.expenses.map(
              (item) =>(
                <ExpenseItem
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
              />
              )
            )
          }
         
          {/* <ExpenseItem
            date={props.expenses[1].date}
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Expenses;
