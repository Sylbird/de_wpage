import { useState } from 'react';
import type { ProcessContextState, Processes } from 'contexts/process/types';
import { HelloWorld, Taskbar } from 'contexts/process/directory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({ HelloWorld, Taskbar });

  return { processes };
};

export default useProcessContextState;
