import React from 'react';

import './ChartBar.css';

function ChartBar(props) {
  let height = '0%';
  if (props.amount > 0) {
    height = (props.amount / props.totalAmountPerYear) * 100 + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: height }}></div>
      </div>
      <div className="chart-bar__label">{props.month}</div>
    </div>
  );
}

export default ChartBar;
