/* eslint-disable react/prop-types */
import React from 'react';
import Celo from '../icons/Celo';

function RecentSupportersCard({ name, amount }) {
  return (
    <div className="flex mb-6">
      <Celo size={36} />
      <p className="pl-4">
        {name} donated {amount} celo
      </p>
    </div>
  );
}

export default RecentSupportersCard;
