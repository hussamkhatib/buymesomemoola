/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import CeloIcon from '../CeloIcon';

function RecentSupportersCard({ hash, celo, avatar, name }) {
  return (
    <div className="flex mb-6 bg-base-200 p-4 rounded">
      <div className="h-16 w-16 relative">
        {avatar ? (
          <Image src={avatar} layout="fill" className="rounded-full" />
        ) : (
          <div className=" bg-neutral-focus rounded-full flex justify-center h-full text-xl text-neutral-content self-center">
            <span className="self-center text-2xl">
              {name[0].toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="pl-4  flex flex-col">
        <p className="text-2xl">
          {name} donated {celo} M<CeloIcon size={20} />
          la
        </p>
        <a
          href={`https://alfajores-blockscout.celo-testnet.org/tx/${hash}`}
          target="_blank"
          rel="noreferrer"
          className="link link-secondary flex items-center gap-x-2"
        >
          <span>View in blockexplorer</span>

          <ExternalLinkIcon className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </div>
  );
}

export default RecentSupportersCard;
