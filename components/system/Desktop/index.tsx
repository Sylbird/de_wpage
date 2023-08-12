import StyledDesktop from 'components/system/Desktop/StyledDesktop';
import useWallpaper from 'hooks/useWallpaper';
import { useRef } from 'react';

const Desktop: FC = ({ children }) => {
  const desktopRef = useRef<HTMLElement>(null);
  useWallpaper(desktopRef);
  return <StyledDesktop ref={desktopRef}>{children}</StyledDesktop>;
};

export default Desktop;
