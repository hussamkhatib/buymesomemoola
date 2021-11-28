/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import TextEditorReadOnly from './TextEditorReadOnly';

function Post({ data }) {
  const { title, content } = data;
  return (
    <div className="max-w-3xl mx-auto w-full py-10">
      <div>
        <h1 className="font-bold text-4xl pb-5">{title}</h1>

        <div className="relative w-full pb-fifty">
          <Image
            src="https://res.cloudinary.com/dbbunxz2o/image/upload/v1638009094/buymesomemoola/empty-rustic-wooden-table-with-blurred-christmas-lights-at-background-picture-id1041796884_ugnm12.jpg"
            layout="fill"
          />
        </div>
        <TextEditorReadOnly defaultValue={content} />
      </div>
    </div>
  );
}

export default Post;
