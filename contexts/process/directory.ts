import dynamic from 'next/dynamic';
import type { Process } from 'contexts/process/types';

export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true
};

export const Taskbar: Process = {
  Component: dynamic(() => import('components/system/Taskbar'))
};
