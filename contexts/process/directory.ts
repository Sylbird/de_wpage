import dynamic from 'next/dynamic';
import type { Processes } from 'contexts/process/types';

const processDirectory: Processes = {
  FileExplorer: {
    Component: dynamic(() => import('components/apps/FileExplorer')),
    hasWindow: true,
    icon: '/System/Icons/explorer.png',
    title: 'FileExplorer'
  },
  JSDOS: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/JSDOS')),
    hasWindow: true,
    icon: '/System/Icons/JSDOS.png',
    lockAspectRatio: true,
    title: 'js-dos v7'
  },
  V86: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/System/Icons/v86.png',
    title: 'Virtual x86'
  }
};

export default processDirectory;
