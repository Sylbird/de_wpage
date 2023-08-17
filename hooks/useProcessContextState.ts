import { useState } from 'react';
import type { ProcessContextState, Processes } from 'contexts/process/types';
import { HelloWorld } from 'contexts/process/directory';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({ HelloWorld });

  return { processes };
};

export default useProcessContextState;
