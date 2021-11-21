/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PopUp from './PopUp';
import { useUser } from '../stores/user.store';

const toastProps = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function CreateUser() {
  const address = useUser((state) => state.address);
  const toggleRegisteredUser = useUser((state) => state.toggleRegisteredUser);
  const [name, setName] = useState('');

  const registerUser = async () => {
    const isNameExists = await fetch(`/api/users/name/${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await isNameExists.json();
    if (data) {
      toast.error('user exist already', toastProps);
    } else {
      const res = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address,
        }),
      });
      await res.json();
    }
    toggleRegisteredUser();
  };

  return (
    <PopUp>
      <div className="p-10 card bg-base-200">
        <div className="form-control">
          <label className="label">
            <span className="label-text">What should we call you</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-ghost"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          onClick={() => registerUser()}
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Save
        </button>
        <button
          onClick={toggleRegisteredUser}
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </div>
    </PopUp>
  );
}

export default CreateUser;
