import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { address } = req.query;
  const { db } = await connectToDatabase();

  const {
    method,
    body: { name },
  } = req;

  if (method === 'GET') {
    const data = await db.collection('users').findOne({ address });
    return res.status(200).send({ data });
  }

  if (method === 'POST') {
    console.log('Adding user to database', name, address);
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
