import { Position } from 'react-rnd';
import { Size } from 'components/system/Window/RndWindow/useResizable';
import type { ThemeName } from 'styles/themes';

type WindowState = {
  position?: Position;
  size?: Size;
};

export type WindowStates = {
  [id: string]: WindowState;
};

export type SessionContextState = {
  foregroundId: string;
  stackOrder: string[];
  themeName: ThemeName;
  windowStates: WindowStates;
  setForegroundId: React.Dispatch<React.SetStateAction<string>>;
  setStackOrder: React.Dispatch<React.SetStateAction<string[]>>;
  setThemeName: React.Dispatch<React.SetStateAction<ThemeName>>;
  setWindowStates: React.Dispatch<React.SetStateAction<WindowStates>>;
};
