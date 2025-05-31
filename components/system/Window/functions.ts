import { Position } from 'react-rnd';
import { pxToNumber } from 'utils/functions';
import { Size } from 'components/system/Window/RndWindow/useResizable';

export const centerPosition = (
  { height, width }: Size,
  taskbarHeight: string
): Position => {
  const { innerHeight: vh, innerWidth: vw } = window;

  return {
    x: Math.floor(vw / 2 - pxToNumber(width) / 2),
    y: Math.floor((vh - pxToNumber(taskbarHeight)) / 2 - pxToNumber(height) / 2)
  };
};
