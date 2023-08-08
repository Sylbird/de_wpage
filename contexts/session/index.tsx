import useSessionContextState from 'hooks/useSessionContextState';
import { createContext } from 'react';
import { initialSessionContextState } from 'utils/initialContextStates';
import type { SessionContextState } from 'contexts/session/types';

export const SessionContext = createContext<SessionContextState>(
  initialSessionContextState
);

export const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
