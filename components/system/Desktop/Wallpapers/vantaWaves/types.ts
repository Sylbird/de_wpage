export type VantaWavesConfig = {
  camera: {
    far: number;
    fov: number;
    near: number;
  };
  color: string;
  forceAnimate?: boolean;
  gyroControls?: boolean;
  hh: number;
  material: {
    options: {
      fog?: boolean;
      wireframe: boolean;
    };
  };
  mouseControls?: boolean;
  mouseEase?: boolean;
  shininess: number;
  touchControls?: boolean;
  waveHeight: number;
  waveSpeed: number;
  ww: number;
  zoom?: number;
};

type VantaWavesSettings = VantaWavesConfig & {
  el: HTMLElement;
  THREE?: unknown;
};

type VantaWaves = {
  destroy: () => void;
  onDestroy: () => void;
  setOptions: (settings: Partial<VantaWavesConfig>) => void;
};

export type VantaObject = {
  WAVES: (settings: VantaWavesSettings) => VantaWaves;
  current: VantaWaves;
};

declare global {
  interface Window {
    THREE: unknown;
    VANTA: VantaObject;
  }
}
