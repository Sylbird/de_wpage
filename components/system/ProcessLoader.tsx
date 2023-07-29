import { ProcessConsumer } from 'contexts/process/processProvider';

const ProcessLoader: FC = () => {
  return (
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, { Component }]) => (
          <Component key={id} />
        ))
      }
    </ProcessConsumer>
  );
};

export default ProcessLoader;
