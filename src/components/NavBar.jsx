/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import CeloIcon from './CeloIcon';
import useConnectWallet from '../useConnect';
import { userAtom } from '../atom';
import Modal from './Modal';
import CreateUserForm from './CreateUserForm';

function NavBar() {
  const { connect, disconnect } = useConnectWallet();
  const [user] = useAtom(userAtom);
  return (
    <>
      <nav className="navbar shadow-lg bg-neutral text-neutral-content ">
        <div className="flex-1 px-2 mx-2">
          <Link href="/">
            <a>
              <h1 className="text-lg md:text-2xl font-semibold ">
                Buy Me Some M
                <CeloIcon size={18} />
                la
              </h1>
            </a>
          </Link>
          <Link href="/explore-creators">
            <a className="text-sm md:text-base ml-6">Explore creators</a>
          </Link>
        </div>
        {user.address ? (
          <button
            onClick={() => disconnect()}
            type="button"
            className="bg-base-300 hover:bg-base-200 text-primary-content px-4 py-2 font-semibold"
          >
            Disconnect
          </button>
        ) : (
          <div className="flex-none">
            <button
              onClick={() => connect()}
              type="button"
              className="bg-base-300 hover:bg-base-200 text-primary-content px-4 py-2 font-semibold"
            >
              Connect
            </button>
          </div>
        )}
      </nav>
      {user.address && !user?.name ? <CreateUser /> : null}
    </>
  );
}

export default NavBar;

function CreateUser() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="Create your page"
      main={<CreateUserForm setIsOpen={setIsOpen} />}
      state={{ isOpen, setIsOpen }}
    />
  );
}
