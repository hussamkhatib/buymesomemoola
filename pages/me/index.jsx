/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { useAtom } from 'jotai';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { PencilIcon } from '@heroicons/react/solid';
import Profile from '../../src/components/profile/Profile';
import { userAtom } from '../../src/atom';
import UserLayout from '../../src/components/private/UserLayout';
import Modal from '../../src/components/Modal';
import WithAddress from '../../src/components/WithAddress';
import FileUploader from '../../src/components/FileUploader';

function Me() {
  const [user] = useAtom(userAtom);
  return (
    <UserLayout>
      <div>
        <div className="flex gap-x-2 mb-2 justify-end ">
          <Link href={`/${user.name}`}>
            <a className="btn mr-2">View Public Profile</a>
          </Link>
          <EditProfile />
        </div>
        <Profile
          name={user.name}
          avatar={user.avatar}
          bio={user.bio}
          followers={user.followers}
          coverImage={user?.coverImage}
        />
      </div>
    </UserLayout>
  );
}
export default WithAddress(Me);

function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} type="button">
        <PencilIcon className="h-5 w-5" aria-hidden />
      </button>
      <Modal
        title="Edit Profile"
        main={<EditProfileForm setIsOpen={setIsOpen} />}
        state={{ isOpen, setIsOpen }}
      />
    </>
  );
}

function EditProfileForm({ setIsOpen }) {
  const [user, setUser] = useAtom(userAtom);
  const bioRef = useRef(null);

  const [avatarFileName, setAvatarFileName] = useState(null);
  const avatarRef = useRef(null);

  const [coverImageFileName, setCoverImageFileName] = useState(null);
  const coverImageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bio = bioRef.current.value;
    const avatar = avatarRef.current;
    const coverImage = coverImageRef.current;
    let userDetails = {
      bio,
    };
    if (avatar) userDetails = { ...userDetails, avatar };
    if (coverImage) userDetails = { ...userDetails, coverImage };

    const res = await fetch('/api/users/editprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: user.address,
        userDetails,
      }),
    });
    const { results } = await res.json();
    setIsOpen(false);
    setUser({
      name: results.userDetails.name,
      avatar: results.userDetails.avatar ?? null,
      bio: results.userDetails.bio,
      coverImage: results.coverImage ?? null,
      followers: results.followers,
      address: results.address,
      earnings: results.earnings,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bio">
        <span className="px-2 font-semibold">Bio</span>
        <textarea
          ref={bioRef}
          className="textarea w-full mt-2"
          name="bio"
          id="bio"
          placeholder="Bio"
          defaultValue={user.bio}
        />
      </label>
      <FileUploader
        onChange={(payload) => {
          setAvatarFileName(payload.name);
          avatarRef.current = payload.file;
        }}
        id="avatar"
        label="Avatar"
        fileName={avatarFileName}
      />
      <FileUploader
        onChange={(payload) => {
          setCoverImageFileName(payload.name);
          coverImageRef.current = payload.file;
        }}
        id="coverImage"
        label="Cover Image"
        fileName={coverImageFileName}
      />
      <div className="flex justify-end gap-x-2">
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="btn btn-outline"
        >
          Cancel
        </button>
        <button type="submit" className="btn">
          Save
        </button>
      </div>
    </form>
  );
}
