import useSessionContextState from 'hooks/useSessionContextState';
import { createContext } from 'react';
import type { SessionContextState } from 'contexts/session/types';

export const SessionContext = createContext<SessionContextState>({});

export const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
