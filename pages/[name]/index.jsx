/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import connectToDatabase from '../../lib/mongodb';
import Modal from '../../src/components/Modal';
import Profile from '../../src/components/profile/Profile';
import CeloIcon from '../../src/components/CeloIcon';
import { userAtom } from '../../src/atom';
import transfer from '../../src/util/celo';
import RecentSupporters from '../../src/components/profile/RecentSupporters';

export default function User({
  userDetails,
  followers,
  address,
  supporters,
  supportersDetails,
}) {
  return (
    <div className="max-w-5xl mx-auto w-full pt-8">
      <Profile
        name={userDetails.name}
        coverImage={userDetails?.coverImage}
        bio={userDetails.bio}
        avatar={userDetails?.avatar}
        followers={followers}
      />
      <div className="p-4 flex gap-x-4">
        <Support name={userDetails.name} address={address} />
        <Link href={`/${userDetails.name}/posts`}>
          <a className="btn btn-primary">Posts</a>
        </Link>
      </div>
      <RecentSupporters
        supporters={supporters}
        supportersDetails={supportersDetails}
      />
    </div>
  );
}

function Support({ name, address }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-primary"
      >
        Support
      </button>
      <Modal
        main={
          <SupportForm setIsOpen={setIsOpen} name={name} address={address} />
        }
        state={{ isOpen, setIsOpen }}
      />
    </>
  );
}

function SupportForm({ setIsOpen, name, address }) {
  const [user] = useAtom(userAtom);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
    const txHash = await transfer(user.address, address, amount);
    const res = await fetch('/api/users/transfereth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderAddress: user.address,
        receiverAddress: address,
        amount: +amount,
        transactionHash: txHash,
      }),
    });
    const { data, error } = await res.json();
    if (data) {
      setIsOpen(false);
      toast.success(
        `You've successfully transferred some Moola to the ${name}`
      );
    } else toast.error(`Error: ${error}`);
  };

  return (
    <>
      <div className="flex justify-end py-2 px-4">
        <button
          className="text-neutral border-solid border-2 rounded-full"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <XCircleIcon className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-4 text-neutral text-center">
        <p className="text-2xl">
          Buy <span className="font-semibold">{name} </span> some m
          <span>
            <CeloIcon size={24} />
            la
          </span>
        </p>
        <div className="flex my-4 bg-gray-100 rounded">
          <div className="p-4 flex">
            <CeloIcon size={48} />
            <span className="ml-3 items-center">x</span>
          </div>

          <div className="form-control p-4 w-full">
            <input
              ref={inputRef}
              type="number"
              min={0}
              max={5000}
              className="input input-bordered"
            />
          </div>
        </div>
        <button type="submit" className="btn w-full rounded-full mt-4">
          support
        </button>
      </form>
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const { name } = context.query;

  const userDetails = await db.collection('users').findOne({
    'userDetails.name': name,
  });
  const { address } = userDetails;

  const donations = await db
    .collection('donations')
    .find({
      to: address,
    })
    .limit(5)
    .toArray();

  const donaters = donations.map((d) => d.from);
  const donatersDetails = await db
    .collection('users')
    .find({
      address: {
        $in: donaters,
      },
    })
    .toArray();

  const donatorsNameAndAvatar = donatersDetails.map((donater) => ({
    address: donater.address,
    name: donater.userDetails.name,
    avatar: donater.userDetails.avatar,
  }));
  return {
    props: {
      userDetails: userDetails.userDetails,
      followers: userDetails.followers,
      address: userDetails.address,
      supporters: JSON.parse(JSON.stringify(donations)),
      supportersDetails: JSON.parse(JSON.stringify(donatorsNameAndAvatar)),
    },
  };
}
