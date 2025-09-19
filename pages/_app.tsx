import StyledApp from 'components/pages/StyledApp';
import Metadata from 'components/pages/Metadata';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'contexts/session';
import { FileSystemProvider } from 'contexts/fileSystem';
import { ProcessProvider } from 'contexts/process';
import { MenuProvider } from 'contexts/menu';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <FileSystemProvider>
    <Metadata />
    <SessionProvider>
      <ProcessProvider>
        <StyledApp>
          <MenuProvider>
            <Component {...pageProps} />
          </MenuProvider>
        </StyledApp>
      </ProcessProvider>
    </SessionProvider>
  </FileSystemProvider>
);

export default App;
