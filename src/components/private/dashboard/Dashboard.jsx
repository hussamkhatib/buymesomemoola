/* eslint-disable react/prop-types */
import React from 'react';
import Checklist from './Checklist';
import Overview from './Overview';

function Dashboard({ name }) {
  return (
    <div className="text-accent-content">
      <Overview />
      <Checklist name={name} />
    </div>
  );
}

export default Dashboard;
