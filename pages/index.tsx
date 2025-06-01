import Desktop from 'components/system/Desktop';
import AppsLoader from 'components/system/Apps/AppsLoader';
import Taskbar from 'components/system/Taskbar';
import FileManager from 'components/system/Files/FileManager';
import { ProcessProvider } from 'contexts/process';

const Home = (): React.ReactElement => (
  <ProcessProvider>
    <Desktop>
      <FileManager directory="User/Public/Desktop" />
      <Taskbar />
      <AppsLoader />
    </Desktop>
  </ProcessProvider>
);

export default Home;
