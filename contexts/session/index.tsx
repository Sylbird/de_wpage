import useSessionContextState from 'contexts/session/useSessionContextState';
import { initialSessionContextState } from 'contexts/initialContextStates';
import type { SessionContextState } from 'contexts/session/types';
import contextFactory from 'contexts/contextFactory';

const { Consumer, Provider, useContext } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export {
  Consumer as SessionConsumer,
  Provider as SessionProvider,
  useContext as useSession
};
