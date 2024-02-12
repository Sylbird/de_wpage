import { config } from 'components/system/Desktop/Wallpapers/vantaWaves/config';
import { loadFiles } from 'utils/functions';

const libs = [
  '/System/Vanta.js/three.min.js',
  '/System/Vanta.js/vanta.waves.min.js'
];

const vantaWaves = (el: HTMLElement | null) => {
  const { VANTA: { current: currentEffect } = {} } = window;

  try {
    currentEffect?.destroy();
  } catch {
    // Failed to destroy previous effect
  }

  if (!el || typeof WebGLRenderingContext === 'undefined') return;

  loadFiles(libs, true).then(() => {
    const { VANTA: { WAVES } = {} } = window;

    if (WAVES) {
      WAVES({
        el,
        ...config
      });
    }
  });
};

export default vantaWaves;
