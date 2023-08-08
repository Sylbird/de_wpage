import useSessionContextState from 'hooks/useSessionContextState';
import { createContext } from 'react';
import { initialSessionContextState } from 'utils/initialContextStates';
import type { SessionContextState } from 'contexts/session/types';

const { Consumer, Provider } = createContext<SessionContextState>(
  initialSessionContextState
);

export const SessionProvider: FC = ({ children }) => (
  <Provider value={useSessionContextState()}>{children}</Provider>
);

export const SessionConsumer = Consumer;
