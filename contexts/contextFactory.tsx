import { createContext } from 'react';

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: FC;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const { Consumer, Provider } = createContext(initialContextState);

  const ProcessProvider: FC = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ProcessProvider };
};

export default contextFactory;
