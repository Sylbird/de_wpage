import { ProcessContextState } from 'contexts/process/types';
import { SessionContextState } from 'contexts/session/types';
import { FileSystemContextState } from 'contexts/fileSystem/types';

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  linkElement: () => undefined,
  open: () => undefined,
  mapProcesses: () => [],
  maximize: () => undefined,
  minimize: () => undefined,
  processes: {},
  title: () => undefined
};

export const initialSessionContextState: SessionContextState = {
  foregroundId: '',
  setForegroundId: () => undefined,
  stackOrder: [],
  setStackOrder: () => undefined,
  themeName: 'defaultTheme',
  windowStates: {},
  setThemeName: () => undefined,
  setWindowStates: () => undefined
};
