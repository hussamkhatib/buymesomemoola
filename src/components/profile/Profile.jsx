import React, { useState } from 'react';
import ProfileBio from './ProfileBio';
import ProfileHeader from './ProfileHeader';
import Edit from '../icons/Edit';
import EditProfile from './EditProfile';
import PopUp from '../PopUp';

function Profile() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    followers: 0,
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

  const closeEditMode = () => {
    setIsEdit(false);
  };
  return (
    <div>
      <div className="block flex justify-end pb-4">
        {isEdit ? (
          <PopUp>
            <EditProfile closeEditMode={closeEditMode} />
          </PopUp>
        ) : (
          <button onClick={() => setIsEdit(true)} type="button">
            <Edit />
          </button>
        )}
      </div>
      <ProfileHeader isEdit={isEdit} handleChange={handleChange} />
      <ProfileBio isEdit={isEdit} handleChange={handleChange} />
    </div>
  );
}

export default Profile;
