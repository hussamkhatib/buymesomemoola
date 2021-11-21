import React, { useEffect, useState } from 'react';
import Profile from '../profile/Profile';
import { useUser } from '../../stores/user.store';

function MeWrapper() {
  const [loading, setLoading] = useState(false);
  const address = useUser((state) => state.address);
  const name = useUser((state) => state.name);
  const followers = useUser((state) => state.followers);

  const [userDetails, setUserDetails] = useState({
    bio: '',
    avatar: '',
    coverImage: '',
  });
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

  if (loading) return <div> loading ... </div>;
  return (
    <div>
      <Profile
        name={name}
        userDetails={userDetails}
        address={address}
        followers={followers}
      />
    </div>
  );
}

export default MeWrapper;
