/* eslint-disable react/prop-types */
import React from 'react';
import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <div className="py-8">
      {posts.map((post) => (
        <PostCard key={post.title} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default PostList;
