import { Position } from 'react-rnd';
import { Size } from 'hooks/useResizable';

type WindowState = {
  position?: Position;
  size?: Size;
};

export type WindowStates = {
  [id: string]: WindowState;
};

export type SessionContextState = {
  themeName: string;
  windowStates: WindowStates;
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  setWindowStates: React.Dispatch<React.SetStateAction<WindowStates>>;
};
