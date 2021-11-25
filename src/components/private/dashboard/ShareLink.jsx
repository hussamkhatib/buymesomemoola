/* eslint-disable react/prop-types */
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ShareLink({ name }) {
  const link = `https://buymesomemoola.vercel.app/${name}`;
  return (
    <div className="form-control py-2">
      <div className="relative">
        <input
          type="text"
          value={link}
          readOnly
          className="w-full pr-16 input input-primary input-bordered bg-neutral"
        />
        <CopyToClipboard text={link}>
          <button
            type="button"
            className="absolute top-0 right-0 rounded-l-none btn btn-primary"
          >
            Copy
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default ShareLink;
