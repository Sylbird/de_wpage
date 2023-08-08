import useProcessContextState from 'hooks/useProcessContextState';
import { createContext } from 'react';
import { initialProcessContextState } from 'utils/initialContextStates';
import type {
  ProcessContextState,
  ProcessProviderProps
} from 'contexts/process/types';

const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses
}) => (
  <Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
