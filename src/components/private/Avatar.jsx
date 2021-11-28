import React from 'react';
import Image from 'next/image';

/* eslint-disable react/prop-types */

function Avatar({ letter, bg, src }) {
  return (
    <div className="avatar placeholder">
      <div className={`${bg} text-neutral-content rounded-full w-32 h-32`}>
        {src ? (
          <Image src={src} layout="fill" className="rounded-full" />
        ) : (
          <span className="text-3xl">{letter}</span>
        )}
      </div>
    </div>
  );
}

export default Avatar;
