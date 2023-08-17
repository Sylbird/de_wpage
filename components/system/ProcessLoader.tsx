import RenderProcess from 'components/system/RenderProcess';
import { ProcessConsumer } from 'contexts/process';

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, process]) => <RenderProcess key={id} {...process} />)
    }
  </ProcessConsumer>
);

export default ProcessLoader;
