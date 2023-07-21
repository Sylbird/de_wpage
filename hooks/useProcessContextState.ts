import { useState } from "react";
import type { ProcessContextState, Processes } from "contexts/process/types";

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = useState(startupProcesses);

  return { processes };
};

export default useProcessContextState;
