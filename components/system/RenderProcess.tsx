import dynamic from 'next/dynamic';
import type { Process } from 'contexts/process/types';

const Window = dynamic(() => import('components/system/Window'));

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

export default RenderProcess;
