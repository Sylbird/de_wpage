import StyledApp from 'components/StyledApp';
import Metadata from 'components/pages/Metadata';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata />
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
