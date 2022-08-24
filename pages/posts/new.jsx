import { useAtom } from 'jotai';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { userAtom } from '../../src/atom';
import TextEditor from '../../src/components/posts/TextEditor';
import WithAddress from '../../src/components/WithAddress';

function NewPosts() {
  const router = useRouter();
  const [user] = useAtom(userAtom);

  const titleRef = useRef(null);
  const [editor, setEditor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const res = await fetch('/api/users/newpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: user.address,
        post: {
          title,
          content: editor,
        },
      }),
    });
    const { data, error } = await res.json();
    if (data) {
      toast.success('Post published');
      titleRef.current.value = '';
      setEditor('');
      router.push('/posts');
    } else {
      toast.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto w-full py-10 px-2"
    >
      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary">
          Publish
        </button>
      </div>

      <div className="form-control py-3">
        <input
          ref={titleRef}
          type="text"
          placeholder="Title"
          className="focus:outline-none text-2xl"
          required
        />
      </div>
      <TextEditor handleEditorChange={(e) => setEditor(e)} />
    </form>
  );
}

export default WithAddress(NewPosts);
