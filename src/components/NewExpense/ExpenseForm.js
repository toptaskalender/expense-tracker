import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const changeTitleHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const changePriceHandler = event => {
    setEnteredPrice(event.target.value);
  };

  const changeDateHandler = event => {
    setEnteredDate(event.target.value);
  };

  const submitFormHandler = e => {
    e.preventDefault();
    const expenseData = {
      id: 'Some Unique Id',
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            value={enteredPrice}
            min="0.01"
            step="0.01"
            onChange={changePriceHandler}
          />
          {/* min & step! */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2021-12-31"
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
