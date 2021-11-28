/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NoPosts from './NoPosts';
import { useUser } from '../../stores/user.store';
import { isArrayEmpty } from '../../util/helper';
import PostList from './PostList';

function Posts() {
  const address = useUser((state) => state.address);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`/api/users/address/${address}/getposts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data, error } = await res.json();
      console.log({ data, error });
      if (data) {
        setPosts(data.post);
        setIsLoading(false);
      } else if (error) {
        console.log({ error });
        setIsLoading(false);
      }
    };
    if (address) getPosts();
  }, []);

  if (isLoading) return <div>loading ... </div>;
  return (
    <div>
      <div className="block flex justify-end">
        <Link href="/posts/new">
          <a className="btn btn-primary">Write a Post</a>
        </Link>
      </div>
      {isArrayEmpty(posts) || !posts ? <NoPosts /> : <PostList posts={posts} />}
    </div>
  );
}

export default Posts;
