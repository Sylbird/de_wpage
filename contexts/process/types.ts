import type { ProcessComponentProps } from 'components/system/RenderProcess';

export type ProcessElements = {
  componentWindow?: HTMLElement;
  taskbarEntry?: HTMLElement;
};

export type Process = ProcessElements & {
  autoSizing?: boolean;
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  lockAspectRatio?: boolean;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
  url?: string;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  close: (id: string) => void;
  linkElement: (
    id: string,
    name: keyof ProcessElements,
    element: HTMLElement
  ) => void;
  open: (id: string, url: string) => void;
  maximize: (id: string) => void;
  minimize: (id: string) => void;
  processes: Processes;
  title: (id: string, newTitle: string) => void;
};
