import { useCallback, useState } from 'react';
import type {
  ProcessContextState,
  ProcessElements,
  Processes
} from 'contexts/process/types';
import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess,
  setProcessElement,
  setTitle
} from 'contexts/process/function';

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});

  const close = useCallback(
    (id: string, closing?: boolean) => setProcesses(closeProcess(id, closing)),
    []
  );
  const maximize = useCallback(
    (id: string) => setProcesses(maximizeProcess(id)),
    []
  );
  const minimize = useCallback(
    (id: string) => setProcesses(minimizeProcess(id)),
    []
  );
  const open = useCallback(
    (id: string, url: string) => setProcesses(openProcess(id, url)),
    []
  );
  const linkElement = useCallback(
    (id: string, name: keyof ProcessElements, element: HTMLElement) =>
      setProcesses(setProcessElement(id, name, element)),
    []
  );

  const title = useCallback(
    (id: string, newTitle: string) => setProcesses(setTitle(id, newTitle)),
    []
  );

  return {
    close,
    open,
    maximize,
    minimize,
    processes,
    linkElement,
    title
  };
};

export default useProcessContextState;
