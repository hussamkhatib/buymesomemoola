/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router'

import React from 'react';
import '../styles/global.css';
import Layout from '../src/components/Layout';
import UserLayout from '../src/components/private/UserLayout'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const privateRoutes = ['/dashboard','/support','/me']
  if(privateRoutes.includes(router.pathname)){
    return (
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout> 
    )
  }
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }


export default MyApp;

