import RenderProcess from 'components/system/RenderProcess';
import { ProcessConsumer } from 'contexts/process';
import type { Process } from 'contexts/process/types';

const ProcessesReducer = ([id, process]: [string, Process]) => (
  <RenderProcess key={id} {...process} />
);

const ProcessLoader: FC = () => {
  return (
    <ProcessConsumer>
      {({ processes }) => Object.entries(processes).map(ProcessesReducer)}
    </ProcessConsumer>
  );
};

export default ProcessLoader;
