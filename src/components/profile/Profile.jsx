/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ProfileBio from './ProfileBio';
import ProfileHeader from './ProfileHeader';
import Edit from '../icons/Edit';
import EditProfile from './EditProfile';
import PopUp from '../PopUp';
import FollowBtn from '../actionButtons/FollowBtn';
import SupportCeloModal from '../modals/SupportCeloModal';
import { useUser } from '../../stores/user.store';

function Profile({ isReadOnly, name, followers }) {
  const kit = useUser((state) => state.kit);
  const address = useUser((state) => state.address);
  const [donateCelo, setDonateCelo] = useState(0);

  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({
    bio: '',
    avatar: '',
    coverImage: '',
    followers: 0,
  });
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

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
      setLoading(false);
    };
    getUserDetails();
  }, []);

  const closeEditMode = () => {
    setIsEdit(false);
  };

  const transferMoola = async (e) => {
    e.preventDefault();
    const goldtoken = await kit.contracts.getGoldToken();

    const oneGold = kit.web3.utils.toWei('1', 'ether');

    const tx = await goldtoken.transfer(userDetails.address, oneGold).send({
      from: address,
    });

    const hash = await tx.getHash();
    const receipt = await tx.waitReceipt();
    console.log({ hash, receipt });
    setShowSupportModal(false);
  };
  const handleCeloChange = (e) => {
    setDonateCelo(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/users/editprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        userDetails,
      }),
    });
    await res.json();
  };
  if (loading) {
    return <div> Loading ... </div>;
  }
  const supportModal = () => {
    setShowSupportModal(true);
  };

  const closeSupportModal = () => {
    setShowSupportModal(false);
  };

  return (
    <div className="pb-20">
      <div className="block flex justify-end">
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
          <>
            {!isReadOnly ? (
              <button onClick={() => setIsEdit(true)} type="button">
                <Edit />
              </button>
            ) : null}
          </>
        )}
      </div>
      <ProfileHeader
        name={name}
        followers={followers}
        userDetails={userDetails}
        isEdit={isEdit}
      />
      <ProfileBio bio={userDetails?.bio} isEdit={isEdit} />
      <div className="p-4">
        <FollowBtn supportModal={supportModal} />
        {showSupportModal ? (
          <SupportCeloModal
            closeSupportModal={closeSupportModal}
            handleCeloChange={handleCeloChange}
            transferMoola={transferMoola}
            name={name}
            donateCelo={donateCelo}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Profile;
