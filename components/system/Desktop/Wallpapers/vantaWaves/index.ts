import WAVES from 'public/System/Vanta.js/vanta.waves.min';
import type { WallpaperEffect } from 'styles/defaultTheme/wallpaper';
/* @ts-expect-error Not a module*/
import * as THREE from 'public/System/Vanta.js/three.min';
import {
  VantaWavesConfig,
  disableControls
} from 'components/system/Desktop/Wallpapers/vantaWaves/config';

const hasWebGL = typeof WebGLRenderingContext !== 'undefined';

const vantaWaves: WallpaperEffect = (
  desktopRef: React.RefObject<HTMLElement>
) => {
  const vantaEffect = hasWebGL
    ? /* @ts-expect-error Expression is not callable*/
      WAVES({
        el: desktopRef.current,
        THREE,
        ...disableControls,
        ...VantaWavesConfig
      })
    : undefined;

  return () => {
    vantaEffect?.destroy?.();
  };
};

export default vantaWaves;
