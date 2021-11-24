/* eslint-disable react/prop-types */
import React from 'react';
import RecentSupportersCard from './RecentSupportersCard';

function RecentSupporters({ followersArray }) {
  return (
    <div className="py-8">
      <h3 className="text-3xl pb-10">Recent Supporters</h3>
      {followersArray?.map((follower) => (
        <RecentSupportersCard hash={follower} key={follower} />
      ))}
    </div>
  );
}

export default RecentSupporters;
