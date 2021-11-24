/* eslint-disable consistent-return */
import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { amount, transactionHash, receiverAddress, senderAddress },
  } = req;

  if (method === 'POST') {
    await db.collection('donations').insertOne({
      from: senderAddress,
      to: receiverAddress,
      hash: transactionHash,
      amount,
    });

    return res.status(200).send({ data: 'transactionHash added' });
  }
}
