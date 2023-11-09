import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';

const processDirectory: Processes = {
  FileExplorer: {
    Component: dynamic(() => import('components/apps/FileExplorer')),
    hasWindow: true,
    icon: '/System/Icons/48x48/explorer.png',
    title: 'FileExplorer'
  },
  JSDOS: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/JSDOS')),
    hasWindow: true,
    icon: '/System/Icons/48x48/JSDOS.ico',
    title: 'js-dos v7'
  },
  V86: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/System/Icons/48x48/v86.ico',
    title: 'Virtual x86'
  }
};

export default processDirectory;
