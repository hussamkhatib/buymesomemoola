import React from 'react';
import RecentSupportersCard from './RecentSupportersCard';

function RecentSupporters() {
  return (
    <div className="py-8">
      <h3 className="text-3xl pb-10">Recent Supporters</h3>
      <RecentSupportersCard name="one" amount={2} />
      <RecentSupportersCard name="two" amount={4} />
    </div>
  );
}

export default RecentSupporters;
