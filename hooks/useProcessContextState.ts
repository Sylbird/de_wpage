import { useState } from 'react';
import type { ProcessContextState, Processes } from 'contexts/process/types';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({});

  return { processes };
};

export default useProcessContextState;
