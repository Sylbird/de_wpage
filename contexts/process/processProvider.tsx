import ProcessDirectory from "contexts/process/directory";
import { createContext,useState } from "react";
import type { ProcessContextState } from "contexts/process/types";

export const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC = ({ children }) => {
  const [processes] = useState(ProcessDirectory);

  return (
    <ProcessContext.Provider value={ {processes} }>
      { children }
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer; 
