/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import React from 'react';
import Celo from '../icons/Celo';
import ExternalLink from '../icons/ExternalLink';

function RecentSupportersCard({ hash, celo, avatar, name }) {
  return (
    <div className="flex mb-6 bg-base-200 p-4 rounded flex">
      <Image src={avatar} width={64} height={64} className="rounded-full" />
      <div className="pl-4  flex flex-col">
        <p className="text-2xl">
          {name} donated {celo} M<Celo size={20} />
          la
        </p>
        <a
          href={`https://alfajores-blockscout.celo-testnet.org/tx/${hash}`}
          target="_blank"
          rel="noreferrer"
          className="link link-secondary"
        >
          view in blockexplorer{' '}
          <span className="">
            <ExternalLink />
          </span>
        </a>
      </div>
    </div>
  );
}

export default RecentSupportersCard;
