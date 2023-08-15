import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/ProcessLoader';
import Taskbar from 'components/system/Taskbar';
import { ProcessProvider } from 'contexts/process';

const Home = (): React.ReactElement => (
  <ProcessProvider>
    <Desktop>
      <Taskbar />
      <ProcessLoader />
    </Desktop>
  </ProcessProvider>
);

export default Home;
