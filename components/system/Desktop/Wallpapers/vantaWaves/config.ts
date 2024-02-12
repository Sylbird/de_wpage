import { VantaWavesConfig } from 'components/system/Desktop/Wallpapers/vantaWaves/types';

export const config: VantaWavesConfig = {
  camera: {
    far: 400,
    fov: 30,
    near: 0.1
  },
  color: 'hsl(240, 12.70%, 13.90%)',
  forceAnimate: true,
  hh: 50,
  material: {
    options: {
      fog: false,
      wireframe: false
    }
  },
  shininess: 45,
  waveHeight: 20,
  waveSpeed: 0.5,
  ww: 50,
  // DisableControls
  gyroControls: false,
  mouseControls: false,
  mouseEase: false,
  touchControls: false
};
