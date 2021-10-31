/* eslint-disable consistent-return */
import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { name, address },
  } = req;

  if (method === 'POST') {
    await db.collection('users').findOneAndUpdate(
      { address },
      {
        $set: {
          name,
          address,
        },
      },
      {
        upsert: true,
      }
    );

    return res.status(200).send({ data: 'User added' });
  }
}