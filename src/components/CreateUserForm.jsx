/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

const CreateUserForm = ({ setIsOpen }) => {
  const [user] = useAtom(userAtom);
  const [userDetails, setUserDetails] = useState({
    name: '',
    bio: '',
    type: '',
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    const isNameExists = await fetch(`/api/users/name/${userDetails.name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await isNameExists.json();
    if (data) {
      toast.error('user exist already');
    } else {
      const res = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userDetails,
          address: user.address,
        }),
      });
      await res.json();
      setIsOpen(false);
    }
  };

  return (
    <form onSubmit={registerUser}>
      <div className="px-2 py-6 card bg-base-200">
        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            <span className="label-text">What should we call you</span>
          </label>
          <input
            type="text"
            name="name"
            className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-neutral"
            value={userDetails.name}
            onChange={handleChange}
            required
          />

          <div className="py-3">
            <select
              value={userDetails.type}
              onChange={handleChange}
              name="type"
              className="select select-bordered w-full "
            >
              <option value="" disabled="disabled" selected="selected">
                Select category which describes you best
              </option>
              <option value="developer">Developer</option>
              <option value="artist">Artist</option>
              <option value="video creator">Video creator</option>
              <option value="writer">Writer</option>
              <option value="community">Community</option>
              <option value="gaming">Gaming</option>
            </select>
          </div>

          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            What are you creating
          </label>
          <div className="mt-1">
            <textarea
              id="bio"
              name="bio"
              value={userDetails.bio}
              onChange={handleChange}
              rows="2"
              maxLength={70}
              required
              className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-neutral"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Save
        </button>
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;

CreateUserForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
