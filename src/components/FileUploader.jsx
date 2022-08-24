import { DocumentIcon } from '@heroicons/react/outline';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const FileUploader = ({ onChange, id, label, fileName }) => {
  const fileRef = useRef(null);

  // eslint-disable-next-line consistent-return
  const handleOnChange = (event) => {
    const file = event?.target?.files?.[0];
    if (!file) {
      fileRef.current.value = '';
      return onChange(null);
    }
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        onChange({
          name: file.name,
          file: Reader.result,
        });
      }
    };
  };

  return (
    <div className="border-2 my-2 p-4 w-full flex flex-col">
      <div>
        <div>Upload your {label}</div>
        <div className="mt-2 text-gray-400">File types: .png, .jpg, .jpeg</div>
      </div>
      <div>
        {fileName && <h2 className="text-sm mt-2">{fileName}</h2>}
        <label
          htmlFor={id}
          className="relative my-2 p-4 flex flex-col items-center justify-center border-dashed border-2 cursor-pointer"
        >
          <DocumentIcon className="w-10 h-10" aria-hidden="true" />

          <span className="text-gray-400 underline">upload new file</span>
          <input
            onChange={handleOnChange}
            className="hidden w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            id={id}
            accept=".png, .jpg, .jpeg"
            type="file"
            autoComplete="off"
            ref={fileRef}
            tabIndex={-1}
          />
        </label>
      </div>
    </div>
  );
};
export default FileUploader;

FileUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};
