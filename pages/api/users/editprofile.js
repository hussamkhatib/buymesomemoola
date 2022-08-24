/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import connectToDatabase from '../../../lib/mongodb';
import uploadFile from '../../../src/util/server.util';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const {
    method,
    body: { address, userDetails },
  } = req;
  if (method === 'POST') {
    let setter = {
      'userDetails.bio': userDetails.bio,
    };
    if (userDetails.avatar) {
      const { secure_url } = await uploadFile(userDetails.avatar);
      setter = { ...setter, 'userDetails.avatar': secure_url };
    }

    if (userDetails.coverImage) {
      const { secure_url } = await uploadFile(userDetails.coverImage);
      setter = { ...setter, 'userDetails.coverImage': secure_url };
    }

    const results = await db.collection('users').findOneAndUpdate(
      { address },
      {
        $set: setter,
      },
      {
        returnDocument: 'after',
        upsert: true,
      }
    );
    return res.status(200).send({ results: results.value });
  }
}
