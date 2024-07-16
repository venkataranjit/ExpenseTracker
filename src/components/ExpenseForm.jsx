import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  let titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  let amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  let dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }
    console.log(expenseData);
    
    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <>
      <form className="wrapper" onSubmit={submitHandler}>
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="text"
                value={enteredTitle}
                className="form-control"
                placeholder="Enter Title"
                required
                onChange={titleChangeHandler}
              />
            </div>
            <div className="col">
              <input
                type="number"
                value={enteredAmount}
                className="form-control"
                placeholder="Enter Amount"
                required
                onChange={amountChangeHandler}
              />
            </div>
            <div className="col">
              <input
                type="date"
                value={enteredDate}
                className="form-control"
                placeholder="Select Date"
                required
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-light">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
