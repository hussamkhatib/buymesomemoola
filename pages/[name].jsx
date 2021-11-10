import React from 'react'
import connectToDatabase from '../lib/mongodb';
import UserHead from '../src/components/profile/userHead';
/* eslint-disable react/prop-types */

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const { name } = context.query;
  
  const userDetails = await db
  .collection("users")
  .findOne({ name })
  if(userDetails)
  return {
      props: {
        userDetails: JSON.parse(JSON.stringify(userDetails)),
      },
    }
  
  return {
      notFound: true,
    }
  }



export default function User({userDetails}) {
    return (
        <div className='py-10'>
          <UserHead userDetails={userDetails}/>            
        </div>
    )
}
