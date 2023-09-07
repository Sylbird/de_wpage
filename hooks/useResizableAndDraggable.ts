import { Position, RndResizeCallback } from 'react-rnd';
import { useCallback, useState } from 'react';
import { DraggableEventHandler } from 'react-draggable';

type Draggable = Position & {
  updatePosition: DraggableEventHandler;
};

type Size = {
  height: string;
  width: string;
};

type Resizable = Size & {
  updateSize: RndResizeCallback;
};

const defaultWindowSize = {
  height: '300px',
  width: '250px'
};

type ResizableAndDraggable = Resizable & Draggable;

const defaultWindowPosition = {
  x: 0,
  y: 0
};

const useResizableAndDraggable = (maximized = false): ResizableAndDraggable => {
  const [{ height, width }, setSize] = useState<Size>(defaultWindowSize);
  const [{ x, y }, setPosition] = useState<Position>(defaultWindowPosition);
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
  return {
    height: maximized ? '100%' : height,
    width: maximized ? '100%' : width,
    updateSize,
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    updatePosition
  };
};

export default useResizableAndDraggable;
