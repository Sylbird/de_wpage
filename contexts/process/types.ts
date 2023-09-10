import type { ProcessComponentProps } from 'components/system/RenderProcess';

export type Process = {
  autoSizing?: boolean;
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
  url?: string;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (id: string) => void;
  open: (id: string, url: string) => void;
  mapProcesses: ProcessesMap;
  maximize: (id: string) => void;
  minimize: (id: string) => void;
  processes: Processes;
};
