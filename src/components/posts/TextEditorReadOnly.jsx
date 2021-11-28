/* eslint-disable react/prop-types */
import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
import React from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditorReadOnly = ({ defaultValue }) => (
  <ReactQuill defaultValue={defaultValue} readOnly theme="bubble" />
);
export default TextEditorReadOnly;
