import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Layout from './hoc/Layout/Layout';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    price: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseDataHandler = expense => {
    setExpenses(prevState => [expense, ...prevState]);
    console.log(expenses);
  };

  return (
    <Layout>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </Layout>
  );
}

export default App;
