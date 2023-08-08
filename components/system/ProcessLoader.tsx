import dynamic from 'next/dynamic';

import { ProcessConsumer } from 'contexts/process';
import type { Process } from 'contexts/process/types';

const Window = dynamic(() => import('components/system/window'));

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

const ProcessLoader: FC = () => {
  return (
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, process]) => (
          <RenderProcess key={id} {...process} />
        ))
      }
    </ProcessConsumer>
  );
};

export default ProcessLoader;
