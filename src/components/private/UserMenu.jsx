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
    title: 'Support',
    route: '/support',
  },
  {
    key: 2,
    title: 'My Profile',
    route: '/me',
  },
];

function UserMenu() {
  const router = useRouter();
  return (
    <ul>
      {navBarList.map((item) => (
        <li
          key={item.key}
          className={`p-2 font-semibold ${
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
