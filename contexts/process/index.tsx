import useProcessContextState from 'hooks/useProcessContextState';
import { initialProcessContextState } from 'utils/initialContextStates';
import type { ProcessContextState } from 'contexts/process/types';
import contextFactory from 'contexts/contextFactory';

const { Consumer, Provider, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
