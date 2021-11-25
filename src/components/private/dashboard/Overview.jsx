/* eslint-disable react/prop-types */
import React from 'react';
import OverviewCard from './OverviewCard';

function Overview({ followers, earnings }) {
  return (
    <div className="bg-accent p-6 mb-10">
      <h3 className="py-2 text-xl">Overview</h3>
      <div className="py-8 ">
        <OverviewCard
          title="Total Followers"
          count={followers}
          // stat="21% more than last month"
        />
        <OverviewCard
          title="Total Earning"
          count={earnings}
          // stat="21% more than last month"
        />
      </div>
    </div>
  );
}

export default Overview;
