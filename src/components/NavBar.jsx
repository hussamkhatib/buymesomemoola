/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../stores/user.store';
import CreateUser from './CreateUser';
import Celo from './icons/Celo';

function NavBar() {
  const router = useRouter();
  const address = useUser((state) => state.address);
  const isRegisteredUser = useUser((state) => state.isRegisteredUser);
  const connectCeloWallet = useUser((state) => state.connectCeloWallet);

  useEffect(() => {
    connectCeloWallet();
  }, []);

  return (
    <>
      <nav className="navbar shadow-lg bg-neutral text-neutral-content ">
        <div className="flex-1 px-2 mx-2">
          <Link href="/">
            <a>
              <h1 className="text-lg md:text-2xl font-semibold ">
                Buy Me Some M
                <Celo size={18} />
                la
              </h1>
            </a>
          </Link>
          <Link href="/explore-creators">
            <a className="text-sm md:text-base ml-6">Explore creators</a>
          </Link>
        </div>
        {address && router.pathname === '/' ? (
          <Link href="/dashboard">
            <a className="bg-base-300 hover:bg-base-200 text-primary-content px-4 py-2 font-semibold">
              Dashboard
            </a>
          </Link>
        ) : address ? null : (
          <div className="flex-none">
            <button
              onClick={connectCeloWallet}
              type="button"
              className="bg-base-300 hover:bg-base-200 text-primary-content px-4 py-2 font-semibold"
            >
              connect
            </button>
          </div>
        )}
      </nav>
      {isRegisteredUser ? <CreateUser /> : null}
    </>
  );
}

export default NavBar;
