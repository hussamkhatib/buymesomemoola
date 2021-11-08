import React from 'react'
import connectToDatabase from '../lib/mongodb';
import UserHead from '../src/components/profile/userHead';

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
        <div className='py-10'>
          <UserHead name={name}/>            
        </div>
    )
}
