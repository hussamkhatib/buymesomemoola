import React from 'react';
import Checklist from './Checklist';
import Overview from './Overview';

function Dashboard() {
  return (
    <div className="text-accent-content">
      <Overview />
      <Checklist />
    </div>
  );
}

export default Dashboard;
