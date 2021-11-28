import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import TextEditor from './TextEditor';
import { useUser } from '../../stores/user.store';

const toastProps = {
  position: 'bottom-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function NewPost() {
  const router = useRouter();
  const address = useUser((state) => state.address);
  const [editor, setEditor] = useState('');
  const [title, setTitle] = useState('');

  const handleEditorChange = (e) => {
    setEditor(e);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/users/newpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
        post: {
          title,
          content: editor,
        },
      }),
    });
    const { data, error } = await res.json();
    if (data) {
      toast.success('post published', toastProps);
      setTitle('');
      setEditor('');
      router.push('/posts');
    } else {
      toast.error(error, toastProps);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto w-full py-10 px-2"
    >
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
          required
        />
      </div>
      <TextEditor handleEditorChange={handleEditorChange} />
    </form>
  );
}

export default NewPost;
