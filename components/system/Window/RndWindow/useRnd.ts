import useResizable from 'components/system/Window/RndWindow/useResizable';
import useDraggable from 'components/system/Window/RndWindow/useDraggable';
import rndDefaults from 'components/system/Window/RndWindow/defaults';
import { centerPosition } from 'components/system/Window/functions';
import { DraggableEventHandler } from 'react-draggable';
import { Props, RndResizeCallback } from 'react-rnd';
import { useCallback } from 'react';
import { useSession } from 'contexts/session';
import { useProcesses } from 'contexts/process';
import { useTheme } from 'styled-components';

const useRnd = (id: string, maximized = false): Props => {
  const {
    processes: { [id]: process }
  } = useProcesses();
  const { autoSizing, lockAspectRatio } = process || {};
  const { windowStates: { [id]: windowState } = {}, setWindowStates } =
    useSession();
  const { position: statePosition, size: stateSize } = windowState || {};
  const [size, setSize] = useResizable(autoSizing, stateSize);
  const {
    sizes: {
      taskbar: { height: taskbarHeight }
    }
  } = useTheme();
  const [position, setPosition] = useDraggable(
    statePosition || centerPosition(size, taskbarHeight)
  );

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
    enableResizing:
      !maximized && (!autoSizing || (autoSizing && lockAspectRatio === true)),
    lockAspectRatio,
    onDragStop,
    onResizeStop,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
