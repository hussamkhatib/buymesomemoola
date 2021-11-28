/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProfileBio from './ProfileBio';
import ProfileHeader from './ProfileHeader';
import Edit from '../icons/Edit';
import EditProfile from './EditProfile';
import PopUp from '../PopUp';
import SupportBtn from '../actionButtons/SupportBtn';
import SupportCeloModal from '../modals/SupportCeloModal';
import { useUser } from '../../stores/user.store';
import RecentSupporters from './RecentSupporters';
import ExternalLink from '../icons/ExternalLink';

function Profile({
  userDetails,
  isReadOnly,
  name,
  followers,
  handleChange,
  handleOnChange,
  imageSrc,
  handleSubmit,
  updatedUserDetails,
  openEditMode,
  closeEditMode,
  isEdit,
  address,
  supporters,
  supportersDetails,
  handleCoverImageChange,
  coverImageSrc,
}) {
  const router = useRouter();
  const kit = useUser((state) => state.kit);
  const avatar = useUser((state) => state.avatar);
  const activeAddress = useUser((state) => state.address);
  const activeName = useUser((state) => state.name);
  const [donateCelo, setDonateCelo] = useState(0);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [updatedSupportersDetails, setupdatedSupportersDetails] =
    useState(supportersDetails);
  const [updatedSupporters, setupdatedSupporters] = useState(supporters);

  const transferMoola = async (e) => {
    e.preventDefault();
    const goldtoken = await kit.contracts.getGoldToken();

    const oneGold = kit.web3.utils.toWei('1', 'ether');

    const tx = await goldtoken.transfer(address, oneGold).send({
      from: activeAddress,
    });

    const hash = await tx.getHash();
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
        amount: +donateCelo,
      }),
    });
    await res.json();
    setupdatedSupportersDetails([
      {
        address: activeAddress,
        avatar,
        name: activeName,
      },
      ...supportersDetails,
    ]);
    setupdatedSupporters([
      {
        amount: +donateCelo,
        hash,
        from: activeAddress,
        to: address,
      },
      ...supporters,
    ]);
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
      <div className="flex justify-end">
        {isEdit ? (
          <PopUp>
            <EditProfile
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleOnChange={handleOnChange}
              imageSrc={imageSrc}
              userDetails={updatedUserDetails}
              closeEditMode={closeEditMode}
              handleCoverImageChange={handleCoverImageChange}
              coverImageSrc={coverImageSrc}
              letter={name[0].toUpperCase()}
            />
          </PopUp>
        ) : (
          <>
            {!isReadOnly ? (
              <>
                <Link href={`/${name}`}>
                  <a className="btn mr-2">
                    View Profile <ExternalLink />
                  </a>
                </Link>
                <button onClick={() => openEditMode()} type="button">
                  <Edit />
                </button>
              </>
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
      <div className="p-4 flex">
        {isOwner ? null : (
          <div className="mr-3">
            <SupportBtn supportModal={supportModal} />
          </div>
        )}
        {router.pathname === '/me' ? null : (
          <Link href={`/${name}/posts`}>
            <a className="btn btn-primary">Posts</a>
          </Link>
        )}
      </div>
      <div>
        {showSupportModal ? (
          <SupportCeloModal
            closeSupportModal={closeSupportModal}
            handleCeloChange={handleCeloChange}
            transferMoola={transferMoola}
            name={name}
            donateCelo={donateCelo}
          />
        ) : null}
        {router.pathname === '/me' ? null : (
          <RecentSupporters
            supporters={updatedSupporters}
            supportersDetails={updatedSupportersDetails}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  );
}

export default Profile;
