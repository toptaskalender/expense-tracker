import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const saveExpenseDataHandler = expenseData => {
    const expense = {
      ...expenseData,
      id: new Date().getTime().toString(),
    };
    props.onAddExpenseData(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
