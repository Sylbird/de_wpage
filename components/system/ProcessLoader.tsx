import RenderProcess from 'components/system/RenderProcess';
import { ProcessConsumer } from 'contexts/process';

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, { Component, hasWindow }]) => (
        <RenderProcess
          key={id}
          Component={Component}
          id={id}
          hasWindow={hasWindow}
        />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
