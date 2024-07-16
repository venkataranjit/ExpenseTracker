import React from 'react'

const ExpenseDate = (props) => {
    let month = props.date.toLocaleString('en-US', {month: 'long'} );
    let day = props.date.toLocaleString('en-US', {day: '2-digit'} );
    let year = props.date.getFullYear();
  return (
    <>
        <p className="date"><span>{day}</span> <span>{month}</span></p>
        <p className="year"><span>{year}</span></p>
    </>
  )
}

export default ExpenseDate
