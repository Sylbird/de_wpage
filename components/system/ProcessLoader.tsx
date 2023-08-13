import RenderProcess from 'components/system/RenderProcess';
import { ProcessConsumer } from 'contexts/process';
import type { Processes } from 'contexts/process/types';

const renderProcesses = (processes: Processes) =>
  Object.entries(processes).map(([id, process]) => (
    <RenderProcess key={id} {...process} />
  ));

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => renderProcesses(processes)}
  </ProcessConsumer>
);

export default ProcessLoader;
