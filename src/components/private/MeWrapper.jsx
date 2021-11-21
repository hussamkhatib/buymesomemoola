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
      setUserDetails(data.userDetails);
      setUpdatedUserDetails(data.userDetails);
      setLoading(false);
    };
    getUserDetails();
  }, []);

  const closeEditMode = () => {
    setIsEdit(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/users/editprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
        userDetails: updatedUserDetails,
      }),
    });
    await res.json();
    closeEditMode();
    setUserDetails(updatedUserDetails);
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
        handleSubmit={handleSubmit}
        closeEditMode={closeEditMode}
        openEditMode={openEditMode}
        isEdit={isEdit}
      />
    </div>
  );
}

export default MeWrapper;
