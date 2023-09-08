import { Props, Position, RndResizeCallback } from 'react-rnd';
import { useCallback, useMemo, useState } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import sizes from 'styles/defaultTheme/sizes';
import { DEFAULT_WINDOW_POSITION, DEFAULT_WINDOW_SIZE } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

type Draggable = Position & {
  updatePosition: DraggableEventHandler;
};

type Resizable = Size & {
  updateSize: RndResizeCallback;
};

type ResizableAndDraggable = Resizable & Draggable;

const useResizableAndDraggable = (maximized = false): ResizableAndDraggable => {
  const [{ height, width }, setSize] = useState<Size>(DEFAULT_WINDOW_SIZE);
  const [{ x, y }, setPosition] = useState<Position>(DEFAULT_WINDOW_POSITION);
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    []
  );
  const updateSize = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } },
      _delta,
      { x: positionX, y: positionY }
    ) => {
      setSize({ height: elementHeight, width: elementWidth });
      setPosition({ x: positionX, y: positionY });
    },
    []
  );

  const taskbarHeight = useMemo(
    () => Number(sizes.taskbar.height.replace('px', '')),
    [sizes.taskbar.height]
  );

  return {
    height: maximized ? `${window.innerHeight - taskbarHeight}px` : height,
    width: maximized ? '100%' : width,
    updateSize,
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    updatePosition
  };
};

export default useResizableAndDraggable;
