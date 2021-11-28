/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NoPosts from './NoPosts';
import { useUser } from '../../stores/user.store';
import PostList from './PostList';

function Posts() {
  const address = useUser((state) => state.address);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`/api/users/address/${address}/getposts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data, error } = await res.json();
      if (data) {
        setPosts(data.post);
      } else if (error) {
        console.log({ error });
      }
    };
    if (address) getPosts();
  }, []);

  return (
    <div>
      <div className="block flex justify-end">
        <Link href="/posts/new">
          <a className="btn btn-primary">Write a Post</a>
        </Link>
      </div>
      <PostList posts={posts} />
      {/* <NoPosts /> */}
    </div>
  );
}

export default Posts;
