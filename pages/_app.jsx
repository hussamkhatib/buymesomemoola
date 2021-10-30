/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import '../styles/global.css';
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

