import processDirectory from 'contexts/process/directory';
import { Process, ProcessElements, Processes } from 'contexts/process/types';

export const closeProcess =
  (processId: string) =>
  ({
    [processId]: _closedProcess,
    ...remainingProcesses
  }: Processes): Processes =>
    remainingProcesses;

export const createPid = (processId: string, url: string): string =>
  url ? `${processId}_${url}` : processId;

export const openProcess =
  (processId: string, url: string) => (currentProcesses: Processes) => {
    const id = createPid(processId, url);
    return currentProcesses[id] || !processDirectory[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [id]: {
            ...processDirectory[processId],
            url
          }
        };
  };

export const toggleProcessSetting =
  (processId: string, setting: 'maximized' | 'minimized') =>
  (currentProcesses: Processes): Processes => {
    const { ...newProcesses } = currentProcesses;

    newProcesses[processId][setting] = !newProcesses[processId][setting];

    return newProcesses;
  };

export const maximizeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    toggleProcessSetting(processId, 'maximized')(currentProcesses);

export const minimizeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    toggleProcessSetting(processId, 'minimized')(currentProcesses);

const setProcessSettings =
  (processId: string, settings: Partial<Process>) =>
  (currentProcesses: Processes): Processes => {
    const { ...newProcesses } = currentProcesses;

    if (newProcesses[processId]) {
      newProcesses[processId] = {
        ...newProcesses[processId],
        ...settings
      };
    }

    return newProcesses;
  };

export const setProcessElement =
  (processId: string, name: keyof ProcessElements, element: HTMLElement) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, { [name]: element })(currentProcesses);
