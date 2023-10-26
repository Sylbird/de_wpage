import { HandleStyles } from 'react-rnd';

export const MIN_WINDOW_HEIGHT = 30;
export const MIN_WINDOW_WIDTH = 170;

const rndDefaults = {
  cancel: '.cancel',
  dragHandleClassName: 'handle',
  enableUserSelectHack: false,
  minHeight: `${MIN_WINDOW_HEIGHT}px`,
  minWidth: `${MIN_WINDOW_WIDTH}px`,
  resizeHandleStyles: {
    bottom: {
      bottom: '-3px',
      cursor: 'ns-resize',
      height: '6px'
    },
    bottomLeft: {
      bottom: '-3px',
      cursor: 'nesw-resize',
      height: '12px',
      left: '-3px',
      width: '12px'
    },
    bottomRight: {
      bottom: '-3px',
      cursor: 'nwse-resize',
      height: '12px',
      right: '-3px',
      width: '12px'
    },
    left: {
      cursor: 'ew-resize',
      height: 'calc(100% - 2px)',
      left: '-3px',
      width: '6px'
    },
    right: {
      cursor: 'ew-resize',
      height: 'calc(100% - 2px)',
      right: '-3px',
      width: '6px'
    },
    top: {
      cursor: 'ns-resize',
      height: '6px',
      top: '-3px'
    },
    topLeft: {
      cursor: 'nwse-resize',
      height: '12px',
      left: '-3px',
      top: '-3px',
      width: '12px'
    },
    topRight: {
      cursor: 'nesw-resize',
      height: '12px',
      right: '-3px',
      top: '-3px',
      width: '12px'
    }
  } as HandleStyles
};

export default rndDefaults;
