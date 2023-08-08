import StyledApp from 'components/pages/StyledApp';
import Metadata from 'components/pages/Metadata';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'contexts/session';
import themes from 'styles/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata />
      <SessionProvider>
        <StyledApp currentTheme={themes.defaultTheme}>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
