import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../stores/user.store';
// import { userService } from 'services';

function RouteGuard({ children }) {
  const address = useUser((state) => state.address);
  const name = useUser((state) => state.name);
  const isLoading = useUser((state) => state.loading);
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const authCheck = () => {
      if (!address || !name) {
        setAuthorized(false);
        router.push('/');
      } else {
        setAuthorized(true);
      }
    };

    if (!isLoading) authCheck();

    return () => {};
  }, [address, isLoading]);
  return authorized && children;
}

export default RouteGuard;
