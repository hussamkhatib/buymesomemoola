/* eslint-disable consistent-return */
import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { amount, transactionHash, receiverAddress, senderAddress },
  } = req;

  if (method === 'POST') {
    const r = await db.collection('donations').findOne({
      from: senderAddress,
      to: receiverAddress,
    });

    if (!r) {
      await db.collection('users').updateOne(
        {
          address: receiverAddress,
        },
        {
          $inc: {
            followers: 1,
          },
        }
      );
    }

    await db.collection('donations').insertOne({
      from: senderAddress,
      to: receiverAddress,
      hash: transactionHash,
      amount,
    });

    return res.status(200).send({ data: 'transactionHash added' });
  }
}
