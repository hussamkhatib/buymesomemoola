/* eslint-disable consistent-return */
import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(req, res) {
  const { name } = req.query;
  const { db } = await connectToDatabase();

  const { method } = req;

  if (method === 'GET') {
    const data = await db.collection('users').findOne({ name });
    return res.status(200).send({ data });
  }
}
