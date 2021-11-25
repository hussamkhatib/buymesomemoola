import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Navbar />
      {children}
      <ToastContainer
        autoClose={5000}
        closeOnClick
        position="bottom-right"
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
