import RenderProcess from 'components/system/RenderProcess';
import { ProcessConsumer } from 'contexts/process';
import { AnimatePresence } from 'framer-motion';

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => (
      <AnimatePresence>
        {Object.entries(processes)
          .filter(([_id, { closing }]) => !closing)
          .map(([id, { Component, hasWindow }]) => (
            <RenderProcess
              key={id}
              Component={Component}
              id={id}
              hasWindow={hasWindow}
            />
          ))}
      </AnimatePresence>
    )}
  </ProcessConsumer>
);

export default ProcessLoader;
