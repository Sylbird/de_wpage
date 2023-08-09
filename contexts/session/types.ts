import { Dispatch, SetStateAction } from 'react';

export type SessionContextState = {
  themeName: string;
  setThemeName: Dispatch<SetStateAction<string>>;
};
