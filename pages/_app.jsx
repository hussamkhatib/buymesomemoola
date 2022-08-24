/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { CeloProvider } from '@celo/react-celo';
import '@celo/react-celo/lib/styles.css';

import React from 'react';
import '../styles/global.css';
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <CeloProvider
      dapp={{
        name: 'Buymesomemoola',
        description: 'The desc',
        url: process.env.NEXT_PUBLIC_WEB_URL,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CeloProvider>
  );
}

export default MyApp;
