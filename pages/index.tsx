import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';

export default function Home() {
  return (
    <ProcessProvider>
      <Desktop>
        <ProcessLoader />
      </Desktop>
    </ProcessProvider>
  );
}
