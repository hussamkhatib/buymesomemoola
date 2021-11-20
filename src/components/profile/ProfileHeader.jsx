/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import Avatar from '../private/Avatar';

function ProfileHeader({ name, userDetails }) {
  return (
    <>
      <div className="relative h-80 -z-10">
        {userDetails?.coverImage ? (
          <Image layout="fill" src={userDetails?.coverImage} />
        ) : null}
      </div>
      <div className="relative z-10 -mt-16 ml-4 flex ">
        {userDetails?.avatar ? (
          <Avatar bg="bg-neutral-focus" src={userDetails?.avatar} size={32} />
        ) : null}
        <div className="ml-2 text-white">
          <p
            style={{ textShadow: '4px 4px 12px rgba(0,0,0,1)' }}
            className="text-xl md:text-4xl mt-6  font-semibold"
          >
            {name}
          </p>
          <p>{userDetails?.followers}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
