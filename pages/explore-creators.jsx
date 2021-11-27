/* eslint-disable react/prop-types */
import React from 'react';
import CreatorsList from '../src/components/creators/CreatorsList';
import connectToDatabase from '../lib/mongodb';
import { isArrayEmpty } from '../src/util/helper';

export default function ExploreCreators({
  developers,
  artists,
  videoCreators,
  writers,
  community,
  gaming,
}) {
  return (
    <div className="px-4 py-16 max-w-5xl mx-auto  w-full">
      {!isArrayEmpty(developers) ? (
        <CreatorsList data={developers} type="developers" />
      ) : null}
      {!isArrayEmpty(artists) ? (
        <CreatorsList data={artists} type="artists" />
      ) : null}
      {!isArrayEmpty(videoCreators) ? (
        <CreatorsList data={videoCreators} type="video Creators" />
      ) : null}

      {!isArrayEmpty(writers) ? (
        <CreatorsList data={writers} type="witers" />
      ) : null}
      {!isArrayEmpty(community) ? (
        <CreatorsList data={community} type="community" />
      ) : null}
      {!isArrayEmpty(gaming) ? (
        <CreatorsList data={gaming} type="gaming" />
      ) : null}
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const developers = await db
    .collection('users')
    .find({
      'userDetails.type': 'developer',
    })
    .toArray();

  const artists = await db
    .collection('users')
    .find({
      'userDetails.type': 'artist',
    })
    .toArray();

  const videoCreators = await db
    .collection('users')
    .find({
      'userDetails.type': 'video creator',
    })
    .toArray();

  const writers = await db
    .collection('users')
    .find({
      'userDetails.type': 'writer',
    })
    .toArray();

  const community = await db
    .collection('users')
    .find({
      'userDetails.type': 'community',
    })
    .toArray();

  const gaming = await db
    .collection('users')
    .find({
      'userDetails.type': 'gaming',
    })
    .toArray();

  return {
    props: {
      developers: JSON.parse(JSON.stringify(developers)),
      artists: JSON.parse(JSON.stringify(artists)),
      videoCreators: JSON.parse(JSON.stringify(videoCreators)),
      writers: JSON.parse(JSON.stringify(writers)),
      community: JSON.parse(JSON.stringify(community)),
      gaming: JSON.parse(JSON.stringify(gaming)),
    },
  };
}
