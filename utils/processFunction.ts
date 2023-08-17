import processDirectory from 'contexts/process/directory';
import { Processes } from 'contexts/process/types';

export const closeProcess =
  (processId: string) =>
  ({
    [processId]: _closedProcess,
    ...remainingProcesses
  }: Processes): Processes =>
    remainingProcesses;

export const openProcess =
  (processId: string) => (currentProcesses: Processes) =>
    currentProcesses[processId] || !processDirectory[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [processId]: processDirectory[processId]
        };
