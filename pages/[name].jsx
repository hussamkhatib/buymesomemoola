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
  supporters,
  supportersDetails,
}) {
  return (
    <div className="max-w-5xl mx-auto w-full pt-8">
      <Profile
        isReadOnly
        name={name}
        userDetails={userDetails}
        address={address}
        followers={followers}
        supporters={supporters}
        supportersDetails={supportersDetails}
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
  const { address } = userDetails;

  const donations = await db
    .collection('donations')
    .find({
      to: address,
    })
    .limit(5)
    .toArray();

  const donaters = donations.map((d) => d.from);
  console.log({ donations, donaters });
  const donatersDetails = await db
    .collection('users')
    .find({
      address: {
        $in: donaters,
      },
    })
    .toArray();

  console.log({ donatersDetails });
  const donatorsNameAndAvatar = donatersDetails.map((donater) => ({
    address: donater.address,
    name: donater.userDetails.name,
    avatar: donater.userDetails.avatar,
  }));
  console.log({ donatorsNameAndAvatar });
  return {
    props: {
      name,
      userDetails: userDetails.userDetails,
      followers: userDetails.followers,
      address: userDetails.address,
      supporters: JSON.parse(JSON.stringify(donations)),
      supportersDetails: JSON.parse(JSON.stringify(donatorsNameAndAvatar)),
    },
  };
}
