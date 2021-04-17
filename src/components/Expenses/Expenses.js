import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import Chart from './Chart/Chart';
import Card from '../UI/Card/Card';
import './Expenses.css';

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2021');

  const changeFilterHandler = year => {
    setEnteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear().toString() === enteredYear
  );

  return (
    <React.Fragment>
      <Card className="expenses">
        <ExpensesFilter
          enteredYear={enteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <Chart filteredExpenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </React.Fragment>
  );
}

export default Expenses;
