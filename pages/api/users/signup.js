/* eslint-disable consistent-return */
import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { userDetails, address },
  } = req;

  if (method === 'POST') {
    await db.collection('users').findOneAndUpdate(
      { address },
      {
        $set: {
          userDetails,
          address,
          followers: 0,
        },
      },
      {
        upsert: true,
      }
    );

    return res.status(200).send({ data: 'User added' });
  }
}
