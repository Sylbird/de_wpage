import { ProcessContextState } from 'contexts/process/types';
import { SessionContextState } from 'contexts/session/types';

export const initialProcessContextState: ProcessContextState = {
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
