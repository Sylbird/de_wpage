import StyledApp from 'components/StyledApp';
import Metadata from 'components/pages/Metadata';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'contexts/session';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata />
      <SessionProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
