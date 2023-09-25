import { useFileSystem } from 'contexts/fileSystem';
import type { SessionContextState, WindowStates } from 'contexts/session/types';
import { useEffect, useState } from 'react';
import { SESSION_FILE } from 'utils/constants';

const useSessionContextState = (): SessionContextState => {
  const { fs } = useFileSystem();
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  useEffect(() => {
    if (sessionLoaded) {
      fs?.writeFile(SESSION_FILE, JSON.stringify({ themeName, windowStates }));
    }
  }, [fs, sessionLoaded, themeName, windowStates]);

  useEffect(
    () =>
      fs?.readFile(SESSION_FILE, (_error, contents) => {
        if (contents) {
          const session = JSON.parse(contents.toString());

          setThemeName(session.themeName);
          setWindowStates(session.windowStates);
        }
        setSessionLoaded(true);
      }),
    [fs]
  );

  return {
    themeName,
    windowStates,
    setThemeName,
    setWindowStates
  };
};

export default useSessionContextState;
