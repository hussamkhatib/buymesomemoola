/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAtom } from 'jotai';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UserLayout from '../../src/components/private/UserLayout';
import { userAtom } from '../../src/atom';
import { isArrayEmpty } from '../../src/util/helper';
import PostList from '../../src/components/posts/PostList';
import WithAddress from '../../src/components/WithAddress';

function MyPosts() {
  const [user] = useAtom(userAtom);
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async (address) => {
      const res = await fetch(`/api/users/address/${address}/getposts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data, error } = await res.json();
      if (data) {
        setPosts(data.post);
        setIsLoading(false);
      } else if (error) {
        setIsLoading(false);
      }
    };
    if (user.address) getPosts(user.address);
  }, [user.address]);

  return (
    <UserLayout>
      <div className="flex justify-end">
        <Link href="/posts/new">
          <a className="btn btn-primary">Write a Post</a>
        </Link>
      </div>
      {loading ? (
        <div>loading ... </div>
      ) : isArrayEmpty(posts) ? (
        <NoPosts />
      ) : (
        <PostList posts={posts} />
      )}
    </UserLayout>
  );
}

export default WithAddress(MyPosts);

function NoPosts() {
  return (
    <div className="py-4 flex flex-col items-center">
      <p className="font-semibold text-2xl pb-1">Write your first post</p>
      <p className="text-gray-500">
        Creators who post exclusives regularly tend to earn more support.
      </p>
    </div>
  );
}
