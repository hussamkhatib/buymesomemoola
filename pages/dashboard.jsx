import React from 'react';
import Dashboard from '../src/components/private/dashboard/Dashboard';
import { useUser } from '../src/stores/user.store';

export default function DashboardPage() {
  const name = useUser((state) => state.name);
  return <Dashboard name={name} />;
}
