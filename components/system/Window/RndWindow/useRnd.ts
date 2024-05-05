import { Position, Props, RndResizeCallback } from 'react-rnd';
import { useCallback } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import useResizable, {
  Size
} from 'components/system/Window/RndWindow/useResizable';
import useDraggable from 'components/system/Window/RndWindow/useDraggable';
import rndDefaults from 'components/system/Window/RndWindow/defaults';
import { useSession } from 'contexts/session';
import { useProcesses } from 'contexts/process';
import { pxToNumber } from 'utils/functions';
import { useTheme } from 'styled-components';

const centerPosition = (
  { height, width }: Size,
  taskbarHeight: string
): Position => {
  const { innerHeight: vh, innerWidth: vw } = window;

  return {
    x: Math.floor(vw / 2 - pxToNumber(width) / 2),
    y: Math.floor((vh - pxToNumber(taskbarHeight)) / 2 - pxToNumber(height) / 2)
  };
};

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
