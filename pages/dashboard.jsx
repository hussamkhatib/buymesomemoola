import React from 'react';
import Overview from '../src/components/private/dashboard/Overview';
import Checklist from '../src/components/private/dashboard/CheckList';
import UserLayout from '../src/components/private/UserLayout';
import WithAddress from '../src/components/WithAddress';

function DashboardPage() {
  return (
    <UserLayout>
      <div className="text-accent-content">
        <Overview />
        <Checklist />
      </div>
    </UserLayout>
  );
}

export default WithAddress(DashboardPage);
