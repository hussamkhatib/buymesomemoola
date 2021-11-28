/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import NoPosts from './NoPosts';

function Posts() {
  return (
    <div>
      <div className="block flex justify-end">
        <Link href="/posts/new">
          <a className="btn btn-primary">Write a Post</a>
        </Link>
      </div>

      <NoPosts />
    </div>
  );
}

export default Posts;
