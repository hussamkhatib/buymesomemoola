import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Avatar from '../private/Avatar';

const Profile = (props) => {
  const { name, coverImage, bio, avatar, followers } = props;
  return (
    <div>
      <ProfileHeader
        name={name}
        coverImage={coverImage}
        avatar={avatar}
        followers={followers}
      />
      <ProfileBio bio={bio} />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
};

function ProfileHeader(props) {
  const { name, avatar, coverImage, followers } = props;
  const src =
    coverImage ||
    'https://res.cloudinary.com/dbbunxz2o/image/upload/v1638009094/buymesomemoola/empty-rustic-wooden-table-with-blurred-christmas-lights-at-background-picture-id1041796884_ugnm12.jpg';
  return (
    <>
      <div className="relative h-80 -z-10">
        <Image layout="fill" src={src} />
      </div>
      <div className="relative z-10 -mt-16 ml-4 flex ">
        <Avatar
          bg="bg-neutral-focus"
          src={avatar}
          letter={name[0].toUpperCase()}
        />
        <div className="ml-2 text-white">
          <p
            style={{ textShadow: '4px 4px 12px rgba(0,0,0,1)' }}
            className="text-xl md:text-4xl mt-8  md:mt-6  font-semibold"
          >
            {name}
          </p>
          <p className="text-black">{followers} followers</p>
        </div>
      </div>
    </>
  );
}

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
};

function ProfileBio(props) {
  const { bio } = props;
  return (
    <div className="p-4  md:py-8">
      <h3 className="text-3xl">Bio</h3>
      <p className="text-xl">{bio}</p>
    </div>
  );
}

ProfileBio.propTypes = {
  bio: PropTypes.string.isRequired,
};
