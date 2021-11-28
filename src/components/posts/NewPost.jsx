import React, { useState } from 'react';
import TextEditor from './TextEditor';

function NewPost() {
  const [editor, setEditor] = useState('');
  const [title, setTitle] = useState('');

  const handleEditorChange = (e) => {
    setEditor(e);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="max-w-5xl mx-auto w-full py-10">
      <div className="block flex justify-end">
        <button type="submit" className="btn btn-primary">
          Publish
        </button>
      </div>

      <div className="form-control py-3">
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Title"
          className="focus:outline-none text-2xl"
        />
      </div>
      <TextEditor handleEditorChange={handleEditorChange} />
    </div>
  );
}

export default NewPost;
