import { ProcessContextState } from 'contexts/process/types';
import { SessionContextState } from 'contexts/session/types';
import { FileSystemContextState } from 'contexts/fileSystem/types';

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
