import { ProcessConsumer } from 'contexts/process';
import Window from 'components/system/window';

const ProcessLoader: FC = () => {
  return (
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, { Component, hasWindow }]) =>
          hasWindow ? (
            <Window key={id}>
              <Component />
            </Window>
          ) : (
            <Component key={id} />
          )
        )
      }
    </ProcessConsumer>
  );
};

export default ProcessLoader;
