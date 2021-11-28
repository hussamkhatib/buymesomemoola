/* eslint-disable react/prop-types */
import React from 'react';
import RecentSupportersCard from './RecentSupportersCard';
import { isArrayEmpty } from '../../util/helper';

function RecentSupporters({ supporters, supportersDetails, isOwner }) {
  const addresses = supportersDetails?.map((s) => s.address);
  return (
    <div className="py-8">
      <h3 className="text-3xl pb-10">Recent Supporters</h3>
      {isArrayEmpty(supporters) ? (
        <p className="bg-base-200 p-4 rounded text-xl">
          {isOwner
            ? 'No one has supported you yet!'
            : 'Be the the first one to support!'}
        </p>
      ) : (
        supporters?.map((supporter) => {
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
        })
      )}
    </div>
  );
}

export default RecentSupporters;
