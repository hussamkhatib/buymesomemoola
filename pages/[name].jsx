/* eslint-disable no-unused-vars */
import React from 'react';
import Profile from '../src/components/profile/Profile';
/* eslint-disable react/prop-types */
export async function getServerSideProps(context) {
  const { name } = context.query;
  return {
    props: {
      name,
    },
  };
}

export default function User({ name }) {
  return (
    <div>
      <Profile isReadOnly name={name} />
    </div>
  );
}
