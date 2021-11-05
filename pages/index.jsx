import React from 'react';
import { useUser } from '../src/stores/user.store';
import Hero from '../src/components/home/Hero'

export default function HomePage() {
  const address = useUser((state) => state.address);
  const error = useUser((state) => state.error);

  return (
    <div>
      <Hero />
      <p>user address {address || 'not connected yet'}</p>
      {error}
    </div>
  );
}
