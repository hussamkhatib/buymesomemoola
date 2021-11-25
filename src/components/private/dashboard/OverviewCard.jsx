/* eslint-disable react/prop-types */
import React from 'react';

function OverviewCard({ title, count }) {
  return (
    <div className="shadow stats mr-10">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value text-primary">{count}</div>
        {/* <div className="stat-desc">{stat}</div> */}
      </div>
    </div>
  );
}

export default OverviewCard;
