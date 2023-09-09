import useRnd from 'hooks/useRnd';
import { useProcesses } from 'contexts/process';
import { Rnd } from 'react-rnd';
import { useSession } from 'contexts/session';
import { useEffect, useRef } from 'react';

type RndWindowProps = {
  children: React.ReactNode;
  id: string;
};

const RndWindow: FC<RndWindowProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized }
    }
  } = useProcesses();
  const rndRef = useRef<Rnd | null>(null);
  const rndProps = useRnd(id, maximized);
  const { setWindowStates } = useSession();

  useEffect(() => {
    const { current } = rndRef || {};
    return () =>
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [id]: {
          position: current?.props.position,
          size: current?.props.size
        }
      }));
  }, [id, setWindowStates]);

  return (
    <Rnd ref={rndRef} {...rndProps}>
      {children}
    </Rnd>
  );
};

export default RndWindow;
