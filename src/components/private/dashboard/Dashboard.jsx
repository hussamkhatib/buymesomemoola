/* eslint-disable react/prop-types */
import React from 'react';
import Checklist from './Checklist';
import Overview from './Overview';

function Dashboard({ name, followers, earnings }) {
  return (
    <div className="text-accent-content">
      <Overview followers={followers} earnings={earnings} />
      <Checklist name={name} />
    </div>
  );
}

export default Dashboard;
