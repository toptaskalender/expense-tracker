import React from 'react';

import ExpenseItem from './ExpenseItem/ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return (
      <p className="expenses-list__fallback">There is no expense to be shown</p>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
