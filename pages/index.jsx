import React from 'react';
import { useUser } from '../src/stores/user.store';

export default function Home() {
  const address = useUser((state) => state.address);
  const error = useUser((state) => state.error);

  return (
    <div>
      <h1>Home Page</h1>
      <p>user address {address || 'not connected yet'}</p>
      {error}
    </div>
  );
}
