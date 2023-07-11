import Head from 'next/head'
import React from 'react'
import { name } from 'package.json';

import 'styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{ name }</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
