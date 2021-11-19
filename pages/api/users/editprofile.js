/* eslint-disable consistent-return */
import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { name, userDetails },
  } = req;

  if (method === 'POST') {
    await db.collection('users').findOneAndUpdate(
      { name },
      {
        $set: {
          userDetails,
        },
      },
      {
        upsert: true,
      }
    );

    return res.status(200).send({ data: 'User updated' });
  }
}
