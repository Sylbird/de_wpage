import RenderComponent from 'components/system/Apps/RenderComponent';
import { ProcessConsumer } from 'contexts/process';
import { AnimatePresence } from 'framer-motion';

const AppsLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => (
      <AnimatePresence>
        {Object.entries(processes)
          .filter(([_id, { closing }]) => !closing)
          .map(([id, { Component, hasWindow }]) => (
            <RenderComponent
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

export default AppsLoader;
