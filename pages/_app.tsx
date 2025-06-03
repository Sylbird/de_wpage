import StyledApp from 'components/pages/StyledApp';
import Metadata from 'components/pages/Metadata';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'contexts/session';
import { FileSystemProvider } from 'contexts/fileSystem';
import { ProcessProvider } from 'contexts/process';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <FileSystemProvider>
    <Metadata />
    <SessionProvider>
      <ProcessProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </ProcessProvider>
    </SessionProvider>
  </FileSystemProvider>
);

export default App;
