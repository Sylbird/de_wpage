import Head from 'next/head'
import React from 'react'

import { name } from 'package.json';


import type { AppProps } from 'next/app';
import StyledApp from 'components/StyledApp';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{ name }</title>
      </Head>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
