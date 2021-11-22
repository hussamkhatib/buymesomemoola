/* eslint-disable consistent-return */
import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { transactionHash, receiverAddress, senderAddress },
  } = req;

  if (method === 'POST') {
    await db.collection('users').updateOne(
      { address: senderAddress },
      {
        $push: {
          follows: transactionHash,
        },
      }
    );

    await db.collection('users').updateOne(
      { address: receiverAddress },
      {
        $push: {
          followersArray: transactionHash,
        },
      }
    );

    return res.status(200).send({ data: 'transactionHash added' });
  }
}
