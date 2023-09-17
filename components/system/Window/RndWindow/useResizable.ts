import { Props } from 'react-rnd';
import { useEffect, useState } from 'react';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';
import { useTheme } from 'styled-components';
import { pxToNumber } from 'utils/functions';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, React.Dispatch<React.SetStateAction<Size>>];

const useResizable = (
  maximized = false,
  autoSizing = false,
  size = DEFAULT_WINDOW_SIZE
): Resizable => {
  const {
    sizes: { taskbar }
  } = useTheme();
  const [{ height, width }, setSize] = useState<Size>(size);

  useEffect(() => {
    if (autoSizing) {
      setSize(size);
    }
  }, [autoSizing, size]);

  return [
    {
      height: maximized
        ? `${window.innerHeight - pxToNumber(taskbar.height)}px`
        : height,
      width: maximized ? '100%' : width
    },
    setSize
  ];
};

export default useResizable;
