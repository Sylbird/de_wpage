import { useCallback, useState } from 'react';
import type {
  ProcessContextState,
  Processes,
  ProcessesMap
} from 'contexts/process/types';
import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess
} from 'contexts/process/function';

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = useCallback((id: string) => setProcesses(closeProcess(id)), []);
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

  return { close, open, mapProcesses, maximize, minimize, processes };
};

export default useProcessContextState;
