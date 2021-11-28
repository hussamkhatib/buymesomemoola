/* eslint-disable react/prop-types */
import React from 'react';
import PostList from '../../src/components/posts/PostList';
import connectToDatabase from '../../lib/mongodb';
import { isArrayEmpty } from '../../src/util/helper';
import EmptyPost from '../../src/components/posts/EmptyPost';

export default function UserPosts({ data, name }) {
  if (isArrayEmpty(data)) {
    return <EmptyPost name={name} />;
  }
  return (
    <div className="max-w-5xl mx-auto w-full my-10">
      <PostList posts={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const { name } = context.query;
  const data = await db
    .collection('users')
    .find(
      {
        'userDetails.name': name,
      },
      {
        projection: {
          post: 1,
          _id: 0,
        },
      }
    )
    .toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data[0].post)),
      name,
    },
  };
}
