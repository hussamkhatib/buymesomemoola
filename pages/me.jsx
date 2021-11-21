import React from 'react';
import Profile from '../src/components/profile/Profile';
import { useUser } from '../src/stores/user.store';

export default function Me() {
  const name = useUser((state) => state.name);
  const followers = useUser((state) => state.followers);
  return (
    <div>
      <Profile name={name} followers={followers} />
    </div>
  );
}
