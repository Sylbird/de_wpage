import { createContext, useContext } from 'react';

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T,
  ContextComponent?: React.ComponentType
) => {
  Consumer: React.Consumer<T>;
  Provider: FC;
  useContext: () => T;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState,
  ContextComponent
) => {
  const Context = createContext(initialContextState);

  const ProcessProvider: FC = ({ children }) => (
    <Context.Provider value={useContextState()}>
      {children}
      {ContextComponent ? <ContextComponent /> : <></>}
    </Context.Provider>
  );

  return {
    Consumer: Context.Consumer,
    Provider: ProcessProvider,
    useContext: () => useContext(Context)
  };
};

export default contextFactory;
