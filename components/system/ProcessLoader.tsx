import RenderProcess from 'components/system/RenderProcess';
import { ProcessConsumer } from 'contexts/process';

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, { Component, hasWindow }]) => (
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
