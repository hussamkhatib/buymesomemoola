/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

function Post({ data }) {
  const { title, content } = data;
  return (
    <div className="max-w-3xl mx-auto w-full pt-10 pb-20">
      <div>
        <h1 className="font-bold text-4xl pb-5">{title}</h1>
        <div className="relative w-full pb-fifty">
          <Image
            src="https://res.cloudinary.com/dbbunxz2o/image/upload/v1638009094/buymesomemoola/empty-rustic-wooden-table-with-blurred-christmas-lights-at-background-picture-id1041796884_ugnm12.jpg"
            layout="fill"
          />
        </div>
        <div className="pt-6" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default Post;
