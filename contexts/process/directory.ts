import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';

const processDirectory: Processes = {
  FileExplorer: {
    Component: dynamic(() => import('components/apps/FileExplorer')),
    hasWindow: true,
    icon: '/System/Icons/48x48/explorer.png',
    title: 'FileExplorer'
  },
  HelloWorld: {
    autoSizing: false,
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: '../favicon.ico',
    title: 'HelloWorld'
  },
  JSDOS: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/JSDOS')),
    hasWindow: true,
    icon: '/System/Icons/48x48/JSDOS.ico',
    title: 'JS-DOS'
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
