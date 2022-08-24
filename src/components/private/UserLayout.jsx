import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import UserMenu from './UserMenu';

function UserLayout({ children }) {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row">
        <div>
          <UserMenu />
        </div>
        <div className="px-4 md:px-8 w-full">{children}</div>
      </div>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        position="bottom-right"
        pauseOnHover
      />
    </div>
  );
}

export default UserLayout;

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
