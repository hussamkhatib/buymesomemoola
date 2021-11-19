import React, { useEffect, useState } from 'react';
import ProfileBio from './ProfileBio';
import ProfileHeader from './ProfileHeader';
import Edit from '../icons/Edit';
import EditProfile from './EditProfile';
import PopUp from '../PopUp';
import { useUser } from '../../stores/user.store';

function Profile() {
  const address = useUser((state) => state.address);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({
    bio: '',
    avatar: '',
    coverImage: '',
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await fetch(`/api/users/address/${address}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await res.json();
      // handle error
      setUserDetails(data.userDetails);
      setLoading(false);
    };
    getUserDetails();
  }, []);

  const closeEditMode = () => {
    setIsEdit(false);
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
        userDetails,
      }),
    });
    await res.json();
  };
  if (loading) {
    return <div> Loading ... </div>;
  }
  return (
    <div>
      <div className="block flex justify-end pb-4">
        {isEdit ? (
          <PopUp>
            <EditProfile
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              userDetails={userDetails}
              closeEditMode={closeEditMode}
            />
          </PopUp>
        ) : (
          <button onClick={() => setIsEdit(true)} type="button">
            <Edit />
          </button>
        )}
      </div>
      <ProfileHeader userDetails={userDetails} isEdit={isEdit} />
      <ProfileBio bio={userDetails.bio} isEdit={isEdit} />
    </div>
  );
}

export default Profile;
