import React from "react";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const dummylink = "";
  return (
    <>
      <div className="col-md-3 col-sm-6 col-xs-6">
        <div className="expenseBox">
          <div className="expense-icon">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" />
              </svg>
            </span>
          </div>
          <div className="expense-content">
            <h3 className="title">{props.title}</h3>
            <h1 className="amount">{`${props.amount} \u20B9 `} </h1>
            <ExpenseDate date={props.date} />
            <a href={dummylink} className="read-more">
              +
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
