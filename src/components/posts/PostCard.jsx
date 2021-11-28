/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import { add3Dots } from '../../util/helper';

function PostCard({ title, content }) {
  const temp = content.replace(/<[^>]+>/g, '');
  const postContent = add3Dots(temp, 120);
  return (
    <>
      <div className="card lg:card-side bordered pb-6">
        <div className="relative w-full pb-twenty">
          <Image
            src="https://res.cloudinary.com/dbbunxz2o/image/upload/v1638009094/buymesomemoola/empty-rustic-wooden-table-with-blurred-christmas-lights-at-background-picture-id1041796884_ugnm12.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{postContent}</p>
          <div className="card-actions">
            <button type="button" className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
