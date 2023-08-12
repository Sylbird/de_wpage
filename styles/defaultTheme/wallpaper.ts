import vantaWaves from 'components/system/Desktop/Wallpapers/vantaWaves';

export type WallpaperEffect = (
  desktopRef: React.RefObject<HTMLElement>
) => () => void;

const wallpaper = vantaWaves;

export default wallpaper;
