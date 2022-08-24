/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navBarList = [
  {
    key: 0,
    title: 'Dashboard',
    route: '/dashboard',
  },
  {
    key: 1,
    title: 'My Profile',
    route: '/me',
  },
  {
    key: 2,
    title: 'My Posts',
    route: '/me/posts',
  },
];

function UserMenu() {
  const router = useRouter();
  return (
    <ul className="px-2 pb-3">
      {navBarList.map((item) => (
        <li
          key={item.key}
          className={`p-2 font-semibold list-none ${
            router.pathname === item.route
              ? 'bg-accent rounded text-accent-content'
              : ''
          }`}
        >
          <Link href={`/${item.route}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserMenu;
