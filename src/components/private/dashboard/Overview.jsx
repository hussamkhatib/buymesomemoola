/* eslint-disable react/prop-types */
import { useAtom } from 'jotai';
import React from 'react';
import OverviewCard from './OverviewCard';
import { userAtom } from '../../../atom';

function Overview() {
  const [user] = useAtom(userAtom);

  return (
    <div className="bg-accent p-6 mb-10">
      <h3 className="py-2 text-xl">Overview</h3>
      <div className="py-8 ">
        <OverviewCard title="Total Followers" count={user.followers} />
        <OverviewCard title="Total Earning" count={user.earnings} />
      </div>
    </div>
  );
}

export default Overview;
