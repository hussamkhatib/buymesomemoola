/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ProfileBio from './ProfileBio';
import ProfileHeader from './ProfileHeader';
import Edit from '../icons/Edit';
import EditProfile from './EditProfile';
import PopUp from '../PopUp';
import SupportBtn from '../actionButtons/SupportBtn';
import SupportCeloModal from '../modals/SupportCeloModal';
import { useUser } from '../../stores/user.store';
import RecentSupporters from './RecentSupporters';

function Profile({
  userDetails,
  isReadOnly,
  name,
  followers,
  handleChange,
  handleSubmit,
  updatedUserDetails,
  openEditMode,
  closeEditMode,
  isEdit,
  address,
  supporters,
  supportersDetails,
}) {
  const kit = useUser((state) => state.kit);
  const activeAddress = useUser((state) => state.address);
  const [donateCelo, setDonateCelo] = useState(0);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const transferMoola = async (e) => {
    e.preventDefault();
    const goldtoken = await kit.contracts.getGoldToken();

    const oneGold = kit.web3.utils.toWei('1', 'ether');

    const tx = await goldtoken.transfer(address, oneGold).send({
      from: activeAddress,
    });

    const hash = await tx.getHash();
    const receipt = await tx.waitReceipt();
    console.log({ hash, receipt });
    setShowSupportModal(false);

    const res = await fetch('/api/users/transfereth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderAddress: activeAddress,
        receiverAddress: address,
        transactionHash: hash,
        amount: donateCelo,
      }),
    });
    await res.json();
  };

  const handleCeloChange = (e) => {
    setDonateCelo(e.target.value);
  };

  const supportModal = () => {
    setShowSupportModal(true);
  };

  const closeSupportModal = () => {
    setShowSupportModal(false);
  };
  const isOwner = activeAddress === address;
  // should be visible for un connected users
  if (!activeAddress) return <div>loading...</div>;
  return (
    <div className="pb-20">
      <div className="block flex justify-end">
        {isEdit ? (
          <PopUp>
            <EditProfile
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              userDetails={updatedUserDetails}
              closeEditMode={closeEditMode}
            />
          </PopUp>
        ) : (
          <>
            {!isReadOnly ? (
              <button onClick={() => openEditMode()} type="button">
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
        {isOwner ? null : <SupportBtn supportModal={supportModal} />}
        {showSupportModal ? (
          <SupportCeloModal
            closeSupportModal={closeSupportModal}
            handleCeloChange={handleCeloChange}
            transferMoola={transferMoola}
            name={name}
            donateCelo={donateCelo}
          />
        ) : null}
        <RecentSupporters
          supporters={supporters}
          supportersDetails={supportersDetails}
        />
      </div>
    </div>
  );
}

export default Profile;
