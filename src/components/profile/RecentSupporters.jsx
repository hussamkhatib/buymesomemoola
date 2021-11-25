/* eslint-disable react/prop-types */
import React from 'react';
import RecentSupportersCard from './RecentSupportersCard';

function RecentSupporters({ supporters, supportersDetails }) {
  const addresses = supportersDetails?.map((s) => s.address);
  return (
    <div className="py-8">
      <h3 className="text-3xl pb-10">Recent Supporters</h3>
      {supporters?.map((supporter) => {
        const index = addresses.indexOf(supporter.from);
        return (
          <RecentSupportersCard
            hash={supporter.hash}
            key={supporter.hash}
            celo={supporter.amount}
            avatar={supportersDetails[index].avatar}
            name={supportersDetails[index].name}
          />
        );
      })}
    </div>
  );
}

export default RecentSupporters;
