/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import useConnectWallet from '../src/useConnect';
import { userAtom } from '../src/atom';
import Modal from '../src/components/Modal';
import CreateUserForm from '../src/components/CreateUserForm';

export default function HomePage() {
  const { connect } = useConnectWallet();
  const [user] = useAtom(userAtom);

  return (
    <div className="bg-neutral">
      <div className="flex flex-col items-center justify-center px-2 h-hero max-w-2xl mx-auto">
        <h3 className="text-secondary-content text-2xl md:text-4xl lg:text-6xl pb-4 md:pb-7 lg:pb-10 font-bold text-center">
          A supporter is worth a thousand followers.
        </h3>
        <p className="text-secondary-content md:text-lg lg:text-2xl text-center pb-4 md:pb-7 lg:pb-10">
          Earn some Moola as a creator. No hidden fees whatsoever
        </p>
        {user.address && !user?.name ? (
          <CreateUser />
        ) : user.address ? (
          <Link href="/dashboard">
            <a className="btn btn-primary w-96 mb-2">Go to Dashboard</a>
          </Link>
        ) : (
          <>
            <button
              onClick={() => connect()}
              className="btn btn-primary w-96 mb-2"
              type="button"
            >
              Connect your wallet to get started
            </button>

            <p className="text-secondary-content">
              Its free, and takes less than a minute.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function CreateUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-primary w-96 mb-2"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Create your page
      </button>
      <Modal
        title="Create your page"
        main={<CreateUserForm setIsOpen={setIsOpen} />}
        state={{ isOpen, setIsOpen }}
      />
    </>
  );
}
