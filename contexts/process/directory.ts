import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';
import Taskbar from 'components/system/Taskbar';

const STARTUP_PROCESSES: string[] = ['HelloWorld', 'Taskbar'];

export const ProcessDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  },
  Taskbar: {
    Component: Taskbar
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (processes, processid) => ({
      ...processes,
      [processid]: ProcessDirectory[processid]
    }),
    {}
  );
