import React from 'react';
import { useUser } from '../../stores/user.store';

function Hero() {
  const address = useUser((state) => state.address);
  return (
    <div className="flex flex-col items-center justify-center px-2 h-hero max-w-2xl mx-auto">
      <h3 className="text-secondary-content text-2xl md:text-4xl lg:text-6xl pb-4 md:pb-7 lg:pb-10 font-bold text-center">
        A supporter is worth a thousand followers.
      </h3>
      <p className="text-secondary-content md:text-lg lg:text-2xl text-center pb-4 md:pb-7 lg:pb-10">
        Earn some Moola as a creator. No hidden fees whatsoever
      </p>
      {address ? (
        <p className="btn btn-primary w-96 mb-2">{address} connected</p>
      ) : (
        <>
          <button className="btn btn-primary w-96 mb-2" type="button">
            Connect your wallet to get started
          </button>

          <p className="text-secondary-content">
            It’s free, and takes less than a minute.
          </p>
        </>
      )}
    </div>
  );
}

export default Hero;
