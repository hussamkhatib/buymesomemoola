/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <div className="py-8 grid auto-rows-fr">
      {posts.map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          content={post.content}
          id={post._id}
        />
      ))}
    </div>
  );
}

export default PostList;
