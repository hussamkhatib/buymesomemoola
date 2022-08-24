import { useAtom } from 'jotai';
import React from 'react';
import { ShieldExclamationIcon } from '@heroicons/react/solid';
import { userAtom } from '../atom';

const WithAddress = (Component) => () => {
  const [user] = useAtom(userAtom);

  return user.address ? (
    <Component />
  ) : (
    <div className="alert alert-warning justify-center shadow-lg">
      <div>
        <ShieldExclamationIcon className="h-5 w-5" aria-hidden />
        <span className="text-xl">
          Connect your wallet to access this page!
        </span>
      </div>
    </div>
  );
};
export default WithAddress;
