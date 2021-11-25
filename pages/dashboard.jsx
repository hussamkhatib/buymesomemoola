import React, { useEffect, useState } from 'react';
import Dashboard from '../src/components/private/dashboard/Dashboard';
import { useUser } from '../src/stores/user.store';

export default function DashboardPage() {
  const name = useUser((state) => state.name);
  const [followers, setFollowers] = useState(null);
  const [earnings, setEarnings] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await fetch(`/api/users/name/${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await res.json();
      // handle Error
      setFollowers(data.followers);
      setEarnings(data.earnings);
    };
    getUserDetails();
  }, []);

  return <Dashboard name={name} followers={followers} earnings={earnings} />;
}
