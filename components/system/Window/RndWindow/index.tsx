import useRnd from 'components/system/Window/RndWindow/useRnd';
import { useProcesses } from 'contexts/process';
import { Rnd } from 'react-rnd';
import { useSession } from 'contexts/session';
import { useEffect, useMemo, useRef } from 'react';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

type RndWindowProps = {
  id: string;
  zIndex: number;
};

const RndWindow: FC<RndWindowProps> = ({ children, id, zIndex }) => {
  const {
    processes: {
      [id]: { autoSizing, maximized, minimized }
    }
  } = useProcesses();
  const rndRef = useRef<Rnd | null>(null);
  const rndProps = useRnd(id, maximized);
  const style = useMemo<React.CSSProperties>(
    () => ({
      pointerEvents: minimized ? 'none' : undefined,
      zIndex
    }),
    [minimized, zIndex]
  );
  const { setWindowStates } = useSession();

  useEffect(() => {
    const { current } = rndRef || {};
    return () =>
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [id]: {
          position: current?.props?.position,
          size: autoSizing ? DEFAULT_WINDOW_SIZE : current?.props?.size
        }
      }));
  }, [autoSizing, id, setWindowStates]);

  return (
    <Rnd ref={rndRef} style={style} {...rndProps}>
      {children}
    </Rnd>
  );
};

export default RndWindow;
