import Head from 'next/head'
import React from 'react'
import theme from 'components/theme';

import { name } from 'package.json';
import { createGlobalStyle,ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{ name }</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider> 
      
    </>
  );
}
