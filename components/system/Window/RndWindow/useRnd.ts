import { Props, RndResizeCallback } from 'react-rnd';
import { useCallback } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import useResizable from 'components/system/Window/RndWindow/useResizable';
import useDraggable from 'components/system/Window/RndWindow/useDraggable';
import rndDefaults from 'components/system/Window/RndWindow/defaults';
import { useSession } from 'contexts/session';
import { useProcesses } from 'contexts/process';

const useRnd = (id: string, maximized = false): Props => {
  const {
    processes: {
      [id]: { autoSizing }
    }
  } = useProcesses();
  const { windowStates: { [id]: windowState } = {}, setWindowStates } =
    useSession();
  const { position: statePosition, size: stateSize } = windowState || {};
  const [position, setPosition] = useDraggable(maximized, statePosition);
  const [size, setSize] = useResizable(maximized, autoSizing, stateSize);

  const onDragStop = useCallback<DraggableEventHandler>(
    (_event, { x, y }) => {
      const newPosition = { x, y };

      setPosition(newPosition);
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [id]: {
          ...currentWindowStates[id],
          position: newPosition
        }
      }));
    },
    [setPosition, setWindowStates, id]
  );

  const onResizeStop = useCallback<RndResizeCallback>(
    (_event, _direction, { style: { height, width } }, _delta, newPositon) => {
      const newSize = { height: height, width: width };

      setSize(newSize);
      setPosition(newPositon);
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [id]: {
          ...currentWindowStates[id],
          position: newPositon,
          size: newSize
        }
      }));
    },
    [id, setSize, setPosition, setWindowStates]
  );

  return {
    enableResizing: !maximized && !autoSizing,
    onDragStop,
    onResizeStop,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
