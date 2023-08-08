import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import { getStartupProcesses } from 'contexts/process/directory';

export default function Home() {
  return (
    <ProcessProvider startupProcesses={getStartupProcesses()}>
      <Desktop>
        <ProcessLoader />
      </Desktop>
    </ProcessProvider>
  );
}
