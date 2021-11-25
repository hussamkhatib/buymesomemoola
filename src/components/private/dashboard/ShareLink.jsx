/* eslint-disable react/prop-types */
import React from 'react';

function ShareLink({ name }) {
  return (
    <div className="form-control py-2">
      <div className="relative">
        <input
          type="text"
          value={`https://buymesomemoola.vercel.app/${name}`}
          readOnly
          className="w-full pr-16 input input-primary input-bordered bg-neutral"
        />
        <button
          type="button"
          className="absolute top-0 right-0 rounded-l-none btn btn-primary"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default ShareLink;
