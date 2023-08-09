import { useState } from 'react';
import type { ProcessContextState } from 'contexts/process/types';
import { getStartupProcesses } from 'contexts/process/directory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState(getStartupProcesses());

  return { processes };
};

export default useProcessContextState;
