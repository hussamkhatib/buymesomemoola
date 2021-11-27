/* eslint-disable react/prop-types */
import React from 'react';
import CreatorsList from '../src/components/creators/CreatorsList';
import connectToDatabase from '../lib/mongodb';

export default function ExploreCreators({ data }) {
  return (
    <div className="px-4 py-16 mx-auto w-full">
      <CreatorsList data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const userDetails = await db.collection('users').find({}).toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(userDetails)),
    },
  };
}
