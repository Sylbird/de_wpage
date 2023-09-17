import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';

const processDirectory: Processes = {
  HelloWorld: {
    autoSizing: false,
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: '../favicon.ico',
    title: 'HelloWorld'
  },
  V86: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/System/Icons/48x48/v86.ico',
    title: 'v86'
  }
};

export default processDirectory;
