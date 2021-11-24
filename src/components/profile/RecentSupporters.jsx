/* eslint-disable react/prop-types */
import React from 'react';
import RecentSupportersCard from './RecentSupportersCard';

function RecentSupporters({ supporters }) {
  console.log(supporters);
  return (
    <div className="py-8">
      <h3 className="text-3xl pb-10">Recent Supporters</h3>
      <RecentSupportersCard
        hash={supporters.hash}
        key={supporters.hash}
        celo={supporters.amount}
      />
    </div>
  );
}

export default RecentSupporters;
