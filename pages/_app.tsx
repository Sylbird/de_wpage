import StyledApp from 'components/pages/StyledApp';
import Metadata from 'components/pages/Metadata';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'contexts/session';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <Metadata />
    <SessionProvider>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </>
);

export default App;
