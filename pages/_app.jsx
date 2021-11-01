/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router'

import React from 'react';
import '../styles/global.css';
import Layout from '../src/components/Layout';
import UserLayout from '../src/components/private/UserLayout'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const publicRoutes = ['/','/explore-creators']
  if(publicRoutes.includes(router.pathname)){
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
    return (
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout> 
    )
}

export default MyApp;

