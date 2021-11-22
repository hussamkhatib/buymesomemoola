/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Celo from '../icons/Celo';
import { useUser } from '../../stores/user.store';

function RecentSupportersCard({ hash }) {
  const [name, setName] = useState(null);
  const web3 = useUser((state) => state.web3);

  web3.eth.getTransactionReceipt(hash).then((res) => {
    setName(res.to);
  });

  return (
    <div className="flex mb-6 bg-base-200 p-4 rounded">
      <p className="pl-4 text-xl">
        {name} donated some M<Celo size={20} />
        la
      </p>
    </div>
  );
}

export default RecentSupportersCard;
