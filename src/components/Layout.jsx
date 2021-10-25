import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired
}