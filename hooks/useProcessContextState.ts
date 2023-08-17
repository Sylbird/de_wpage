import { useCallback, useState } from 'react';
import type { ProcessContextState, Processes } from 'contexts/process/types';
import { closeProcess, openProcess } from 'utils/processFunction';

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const close = useCallback((id: string) => setProcesses(closeProcess(id)), []);
  const open = useCallback((id: string) => setProcesses(openProcess(id)), []);

  return { close, open, processes };
};

export default useProcessContextState;
