import React from 'react';
import Image from 'next/image';
import Avatar from '../private/Avatar';

function ProfileHeader() {
  return (
    <>
      <div className="relative h-80 -z-10">
        <Image
          layout="fill"
          src="https://media.istockphoto.com/photos/falling-autumn-leaves-before-sunset-picture-id1176602671?k=20&m=1176602671&s=612x612&w=0&h=u88s3JdcrTO4y4A779WhJpX0QT9q7rNFTx5ha_fzCOs="
        />
      </div>
      <div className="relative z-10 -mt-16 ml-4 flex">
        <Avatar bg="bg-neutral-focus" letter="H" size={32} />
        <div className="ml-2 text-white">
          <p
            style={{ textShadow: '4px 4px 12px rgba(0,0,0,1)' }}
            className="text-xl md:text-4xl mt-6  font-semibold"
          >
            Hussam
          </p>
          <p>123 followers</p>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
