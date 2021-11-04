import React from 'react'
import connectToDatabase from '../lib/mongodb';

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const { name } = context.query;
  
  const userDetails = await db
  .collection("users")
  .findOne({ name })
  if(userDetails)
  return {
      props: {
        name
      },
    }
  return {
      notFound: true,
    }
  }



export default function User({name}) {
    return (
        <div>
            User :  { name }
        </div>
    )
}
