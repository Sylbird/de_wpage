import { useEffect } from 'react';
import { useTheme } from 'styled-components';

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  const { wallpaper } = useTheme();

  useEffect(() => wallpaper?.(desktopRef), [desktopRef, wallpaper]);
};

export default useWallpaper;
