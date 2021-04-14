import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        price={props.expenses[0].price}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        price={props.expenses[1].price}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        price={props.expenses[2].price}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        price={props.expenses[3].price}
        date={props.expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
