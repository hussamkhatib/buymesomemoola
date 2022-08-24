/* eslint-disable react/prop-types */
import React from 'react';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import connectToDatabase from '../../lib/mongodb';

export default function PostPage({ data }) {
  const { title, content } = data;
  return (
    <div className="max-w-3xl mx-auto w-full pt-10 pb-20">
      <div>
        <h1 className="font-bold text-4xl pb-5">{title}</h1>
        <div className="relative w-full pb-fifty">
          <Image
            src="https://res.cloudinary.com/dbbunxz2o/image/upload/v1638009094/buymesomemoola/empty-rustic-wooden-table-with-blurred-christmas-lights-at-background-picture-id1041796884_ugnm12.jpg"
            layout="fill"
          />
        </div>
        <div className="pt-6" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
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
