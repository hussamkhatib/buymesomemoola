/* eslint-disable react/prop-types */
import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
import React from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = ({ handleEditorChange, defaultValue }) => (
  <ReactQuill
    style={{ height: '15rem' }}
    defaultValue={defaultValue}
    onChange={(e) => {
      handleEditorChange(e);
    }}
  />
);
export default TextEditor;
