import type { SessionContextState, WindowStates } from 'contexts/session/types';
import { useState } from 'react';

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  return {
    themeName,
    windowStates,
    setThemeName,
    setWindowStates
  };
};

export default useSessionContextState;
