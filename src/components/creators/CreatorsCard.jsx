/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
/* eslint-disable react/prop-types */

function CreatorsCard({ name, description, supporters, picture }) {
  return (
    <Link href={`/${name}`}>
      <a>
        <div className="relative h-36 w-40">
          {picture ? (
            <Image layout="fill" src={picture} />
          ) : (
            <div className="bg-neutral-focus flex justify-center h-full text-xl text-neutral-content self-center">
              <span className="self-center text-4xl">
                {name[0].toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div className="h-creatorCard flex flex-col  justify-between">
          <p className="mt-1 pb-0.5 leading-5">
            <span className="font-semibold">{name} </span>
            <span>{description}</span>
          </p>
          <p className="mt-1">{supporters} Supporters</p>
        </div>
      </a>
    </Link>
  );
}

export default CreatorsCard;
