/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

function EmptyPost({ name }) {
  return (
    <div className="mx-auto max-w-5xl w-full my-10">
      <Link href={`/${name}`}>
        <a className="btn btn-primary mb-3">
          <span>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </span>
          Back{' '}
        </a>
      </Link>
      <p className="font-bold text-3xl">{name} has not written any post yet!</p>
    </div>
  );
}

export default EmptyPost;
