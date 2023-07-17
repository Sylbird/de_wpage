import dynamic from 'next/dynamic';

export const ProcessDirectory = {
    HelloWorld:{
        Component: dynamic(() => import('components/apps/HelloWorld'))
    }
}