import dynamic from 'next/dynamic';
import type { Process } from 'contexts/process/types';

const Window = dynamic(() => import('components/system/Window'));

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? withWindow(Component) : <Component />;

export default RenderProcess;
