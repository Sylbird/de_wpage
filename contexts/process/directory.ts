import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: '../favicon.ico',
    title: 'Test'
  }
};

export default processDirectory;
