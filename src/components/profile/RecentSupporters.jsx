/* eslint-disable react/prop-types */
import React from 'react';
import RecentSupportersCard from './RecentSupportersCard';

function RecentSupporters({ supporters }) {
  console.log(supporters);
  return (
    <div className="py-8">
      <h3 className="text-3xl pb-10">Recent Supporters</h3>
      {supporters.map((supporter) => (
        <RecentSupportersCard
          hash={supporter.hash}
          key={supporter.hash}
          celo={supporter.amount}
        />
      ))}
    </div>
  );
}

export default RecentSupporters;
