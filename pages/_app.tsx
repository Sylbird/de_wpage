import StyledApp from 'components/pages/StyledApp';
import Metadata from 'components/pages/Metadata';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'contexts/session';
import { FileSystemProvider } from 'contexts/fileSystem';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <FileSystemProvider>
    <Metadata />
    <SessionProvider>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </FileSystemProvider>
);

export default App;
