import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2021');

  const changeFilterHandler = year => {
    setEnteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear().toString() === enteredYear
  );

  const expenses = filteredExpenses.map(expense => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      price={expense.price}
      date={expense.date}
    />
  ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          enteredYear={enteredYear}
          onChangeFilter={changeFilterHandler}
        />
        {expenses}
      </Card>
    </div>
  );
}

export default Expenses;
