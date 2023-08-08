import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';

const STARTUP_PROCESSES: string[] = ['HelloWorld'];

export const ProcessDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (acc, id) => ({
      ...acc,
      [id]: ProcessDirectory[id]
    }),
    {}
  );
