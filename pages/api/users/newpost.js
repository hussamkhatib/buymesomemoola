/* eslint-disable consistent-return */
import { ObjectId } from 'mongodb';
import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { address, post },
  } = req;

  if (method === 'POST') {
    await db.collection('users').findOneAndUpdate(
      { address },
      {
        $push: {
          post: { ...post, _id: new ObjectId() },
        },
      }
    );

    return res.status(200).send({ data: 'Post added' });
  }
}
