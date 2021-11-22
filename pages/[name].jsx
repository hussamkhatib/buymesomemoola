/* eslint-disable no-unused-vars */
import React from 'react';
import connectToDatabase from '../lib/mongodb';

import Profile from '../src/components/profile/Profile';
/* eslint-disable react/prop-types */

export default function User({
  name,
  userDetails,
  followers,
  address,
  followersArray,
}) {
  return (
    <div className="max-w-5xl mx-auto w-full pt-8">
      <Profile
        isReadOnly
        name={name}
        userDetails={userDetails}
        address={address}
        followers={followers}
        followersArray={followersArray}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const { name } = context.query;

  const userDetails = await db.collection('users').findOne({
    'userDetails.name': name,
  });
  return {
    props: {
      name,
      userDetails: userDetails.userDetails,
      followers: userDetails.followers,
      address: userDetails.address,
      followersArray: userDetails.followersArray,
    },
  };
}
