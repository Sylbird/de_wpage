import { Props, RndResizeCallback } from 'react-rnd';
import { useCallback } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import useResizable from 'hooks/useResizable';
import useDraggable from 'hooks/useDraggable';
import rndDefaults from 'utils/rndDefaults';

const useRnd = (maximized = false): Props => {
  const [size, setSize] = useResizable(maximized);
  const [position, setPosition] = useDraggable(maximized);

  const onDragStop = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    [setPosition]
  );

  const onResizeStop = useCallback<RndResizeCallback>(
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
    [setSize, setPosition]
  );

  return {
    enableResizing: !maximized,
    onDragStop,
    onResizeStop,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
