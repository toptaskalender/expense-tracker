import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isShowingForm, setIsShowingForm] = useState(false);

  const saveExpenseDataHandler = expenseData => {
    const expense = {
      ...expenseData,
      id: new Date().getTime().toString(),
    };
    setIsShowingForm(prevState => !prevState);
    props.onAddExpenseData(expense);
  };

  const showExpenseFormHandler = () => {
    setIsShowingForm(prevState => !prevState);
  };

  const hideExpenseFormHandler = () => {
    setIsShowingForm(prevState => !prevState);
  };

  let newExpenseContent = (
    <button className="positive" onClick={showExpenseFormHandler}>
      Add Expense
    </button>
  );
  if (isShowingForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onHideExpenseForm={hideExpenseFormHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
}

export default NewExpense;
