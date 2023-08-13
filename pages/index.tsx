import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

const Home = (): React.ReactElement => (
  <ProcessProvider>
    <Desktop>
      <ProcessLoader />
    </Desktop>
  </ProcessProvider>
);

export default Home;
