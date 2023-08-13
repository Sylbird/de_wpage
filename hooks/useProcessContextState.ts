import { useState } from 'react';
import type { ProcessContextState } from 'contexts/process/types';
import { HelloWorld, Taskbar } from 'contexts/process/directory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ HelloWorld, Taskbar });

  return { processes };
};

export default useProcessContextState;
