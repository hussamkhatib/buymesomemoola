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
        <div className="flex-none sm:hidden">
          <button type="button" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link href="/">
            <a>
              <h1 className="text-2xl font-bold mx-2">
                Buymesomem
                <Celo size={16} />
                la
              </h1>
            </a>
          </Link>
          <Link href="/explore-creators">
            <a className="ml-6">Explore creators</a>
          </Link>
        </div>
        {address && router.pathname === '/' ? (
          <Link href="/dashboard">
            <a>Go to Dashboard</a>
          </Link>
        ) : address ? null : (
          <div className="flex-none">
            <button
              onClick={connectCeloWallet}
              type="button"
              className="btn btn-square btn-ghost"
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
