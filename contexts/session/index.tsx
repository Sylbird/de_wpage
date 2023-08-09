import useSessionContextState from 'hooks/useSessionContextState';
import { initialSessionContextState } from 'utils/initialContextStates';
import type { SessionContextState } from 'contexts/session/types';
import contextFactory from 'contexts/contextFactory';

const { Consumer, Provider } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export { Consumer as SessionConsumer, Provider as SessionProvider };
