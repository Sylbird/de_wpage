import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';

const ProcessDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  }
};

export default ProcessDirectory;
