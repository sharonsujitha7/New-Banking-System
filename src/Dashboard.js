import React, { useState } from 'react';
import Transaction from './Transaction';
import AccountDetails from './AccountDetails';
import AccountStatement from './AccountStatement';
import AccountSummary from './AccountSummary';
import './Dashboard.css';

function Dashboard() {
  const [activeButton, setActiveButton] = useState('default');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="dashboard-container">
      <div className="left-panel">
        <div className = "button-list">
            <button onClick={() => handleButtonClick('account_statement')}>Account Statement</button>
            <button onClick={() => handleButtonClick('account_details')}>Account Details</button>
            <button onClick={() => handleButtonClick('account_summary')}>Account Summary</button>
            <button onClick={() => handleButtonClick('fund_transfer')}>Fund Transfer</button>
        </div>
      </div>
      <div className="content">
        {activeButton === 'account_statement' && <AccountStatement />}
        {activeButton === 'account_details' && <AccountDetails />}
        {activeButton === 'account_summary' && <AccountSummary />}
        {activeButton === 'fund_transfer' && <Transaction />}
      </div>
    </div>
  );
}

export default Dashboard;