import { Position } from 'react-rnd';
import { useState } from 'react';
import { DEFAULT_WINDOW_POSITION } from 'utils/constants';

type Draggable = [Position, React.Dispatch<React.SetStateAction<Position>>];

const useDraggable = (position = DEFAULT_WINDOW_POSITION): Draggable => {
  const [{ x, y }, setPosition] = useState<Position>(position);

  return [{ x, y }, setPosition];
};

export default useDraggable;
