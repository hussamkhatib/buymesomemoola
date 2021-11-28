/* eslint-disable react/prop-types */
import React from 'react';
import { ObjectId } from 'mongodb';
import connectToDatabase from '../../lib/mongodb';
import Post from '../../src/components/posts/Post';

export default function PostPage({ data }) {
  return <Post data={data} />;
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const { _id } = context.query;

  const data = await db.collection('users').findOne(
    {
      post: {
        $elemMatch: {
          _id: ObjectId(_id),
        },
      },
    },
    {
      projection: {
        'post.$': 1,
        _id: 0,
      },
    }
  );

  return {
    props: {
      data: JSON.parse(JSON.stringify(data.post[0])),
    },
  };
}
