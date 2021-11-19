/* eslint-disable react/prop-types */
import React from 'react';

function ProfileBio({ bio }) {
  return (
    <div className="p-4  md:py-8">
      <h3 className="text-3xl">Bio</h3>
      <p className="text-xl">{bio}</p>
    </div>
  );
}

export default ProfileBio;
