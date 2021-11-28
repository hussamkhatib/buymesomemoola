/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import Avatar from '../private/Avatar';

function ProfileHeader({ name, userDetails, followers }) {
  const src =
    userDetails?.coverImage ||
    'https://res.cloudinary.com/dbbunxz2o/image/upload/v1638009094/buymesomemoola/empty-rustic-wooden-table-with-blurred-christmas-lights-at-background-picture-id1041796884_ugnm12.jpg';
  return (
    <>
      <div className="relative h-80 -z-10">
        <Image layout="fill" src={src} />
      </div>
      <div className="relative z-10 -mt-16 ml-4 flex ">
        <Avatar
          bg="bg-neutral-focus"
          src={userDetails?.avatar}
          letter={name[0].toUpperCase()}
        />
        <div className="ml-2 text-white">
          <p
            style={{ textShadow: '4px 4px 12px rgba(0,0,0,1)' }}
            className="text-xl md:text-4xl mt-8  md:mt-6  font-semibold"
          >
            {name}
          </p>
          <p className="text-black">{followers} followers</p>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
