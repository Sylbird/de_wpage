import useProcessContextState from 'hooks/useProcessContextState';
import ProcessDirectory from 'contexts/process/directory';
import { createContext } from 'react';
import { initialProcessContextState } from 'utils/initialContextStates';
import type { ProcessContextState } from 'contexts/process/types';

export const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(ProcessDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
