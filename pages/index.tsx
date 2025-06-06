import Desktop from 'components/system/Desktop';
import AppsLoader from 'components/system/Apps/AppsLoader';
import Taskbar from 'components/system/Taskbar';
import FileManager from 'components/system/Files/FileManager';

const Home = (): React.ReactElement => (
  <Desktop>
    <FileManager url="User/Public/Desktop" />
    <Taskbar />
    <AppsLoader />
  </Desktop>
);

export default Home;
