import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';

export type ProcessElements = {
  componentWindow?: HTMLElement;
  taskbarEntry?: HTMLElement;
};

export type Process = ProcessElements & {
  autoSizing?: boolean;
  closing?: boolean;
  Component: React.ComponentType<ComponentProcessProps>;
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
  close: (id: string, closing?: boolean) => void;
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
