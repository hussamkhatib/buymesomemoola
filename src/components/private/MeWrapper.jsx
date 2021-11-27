/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Profile from '../profile/Profile';
import { useUser } from '../../stores/user.store';

const toastProps = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function MeWrapper() {
  const [loading, setLoading] = useState(true);
  const address = useUser((state) => state.address);
  const name = useUser((state) => state.name);
  const followers = useUser((state) => state.followers);

  const [isEdit, setIsEdit] = useState(false);
  const [userDetails, setUserDetails] = useState({
    bio: '',
    avatar: '',
    coverImage: '',
  });
  const [imageSrc, setImageSrc] = useState();
  const [coverImageSrc, setCoverImageSrc] = useState();

  const [updatedUserDetails, setUpdatedUserDetails] = useState(userDetails);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await fetch(`/api/users/name/${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await res.json();
      // handle error
      setImageSrc(data.userDetails.avatar);
      setUserDetails(data.userDetails);
      setUpdatedUserDetails(data.userDetails);
      setLoading(false);
    };
    getUserDetails();
  }, []);

  const closeEditMode = () => {
    setIsEdit(false);
    setImageSrc(userDetails.avatar);
    setCoverImageSrc(userDetails.coverImage);
  };
  const openEditMode = () => {
    setIsEdit(true);
  };
  const handleChange = (e) => {
    setUpdatedUserDetails({
      ...updatedUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleCoverImageChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setCoverImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  async function handleOnSubmit(target) {
    const form = target;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    );
    if (!fileInput.files.length) {
      return false;
    }
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }
    formData.append('upload_preset', 'buymesomemoola');
    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dbbunxz2o/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(null);
    return data.secure_url;
  }
  async function handleOnSubmitCoverImage(target) {
    const form = target;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'coverImage'
    );
    if (!fileInput.files.length) {
      return false;
    }
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }
    formData.append('upload_preset', 'buymesomemoola');
    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dbbunxz2o/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());

    setCoverImageSrc(null);
    return data.secure_url;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const secureUrl = (await handleOnSubmit(e.target)) || userDetails.avatar;
    const coverImageSecureUrl =
      (await handleOnSubmitCoverImage(e.target)) || userDetails.coverImage;
    const newState = {
      ...updatedUserDetails,
      avatar: secureUrl,
      coverImage: coverImageSecureUrl,
    };

    const res = await fetch('/api/users/editprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
        userDetails: newState,
      }),
    });
    await res.json();
    closeEditMode();
    setUpdatedUserDetails(newState);
    setUserDetails(newState);
    toast.success('user updated', toastProps);
  };

  if (loading) return <div> loading ... </div>;
  return (
    <div>
      <Profile
        name={name}
        userDetails={userDetails}
        updatedUserDetails={updatedUserDetails}
        address={address}
        followers={followers}
        handleChange={handleChange}
        handleOnChange={handleOnChange}
        imageSrc={imageSrc}
        handleSubmit={handleSubmit}
        closeEditMode={closeEditMode}
        openEditMode={openEditMode}
        isEdit={isEdit}
        coverImageSrc={coverImageSrc}
        handleCoverImageChange={handleCoverImageChange}
      />
    </div>
  );
}

export default MeWrapper;
