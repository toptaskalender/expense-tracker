import React from 'react';

import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

function Chart(props) {
  const datas = [
    { month: 'Jan', amount: 0 },
    { month: 'Feb', amount: 0 },
    { month: 'Mar', amount: 0 },
    { month: 'Apr', amount: 0 },
    { month: 'May', amount: 0 },
    { month: 'Jun', amount: 0 },
    { month: 'Jul', amount: 0 },
    { month: 'Aug', amount: 0 },
    { month: 'Sep', amount: 0 },
    { month: 'Oct', amount: 0 },
    { month: 'Nov', amount: 0 },
    { month: 'Dec', amount: 0 },
  ];

  for (let expense of props.filteredExpenses) {
    const monthIndex = expense.date.getMonth();
    datas[monthIndex].amount += expense.price;
  }

  const pricesPerMonth = datas.map(expenseData => expenseData.amount);
  const totalAmountPerYear = pricesPerMonth.reduce((acc, cur) => acc + cur, 0);

  return (
    <React.Fragment>
      <div className="chart">
        {datas.map(expenseData => (
          <ChartBar
            key={expenseData.month}
            month={expenseData.month}
            amount={expenseData.amount}
            totalAmountPerYear={totalAmountPerYear}
          />
        ))}
      </div>
      <h2 className="chart__total-amount">
        Total Amount: <span className="chart__total-amount--highlight">$</span>{' '}
        {totalAmountPerYear}
      </h2>
    </React.Fragment>
  );
}

export default Chart;
