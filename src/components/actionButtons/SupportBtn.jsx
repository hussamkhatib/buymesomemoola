/* eslint-disable react/prop-types */
import React from 'react';

function SupportBtn({ supportModal }) {
  return (
    <button
      onClick={() => supportModal()}
      type="button"
      className="btn btn-primary"
    >
      Support
    </button>
  );
}

export default SupportBtn;
