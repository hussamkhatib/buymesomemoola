/* eslint-disable react/prop-types */
import React from 'react';

function FollowBtn({ supportModal }) {
  return (
    <button
      onClick={() => supportModal()}
      type="button"
      className="btn btn-primary"
    >
      Follow
    </button>
  );
}

export default FollowBtn;
