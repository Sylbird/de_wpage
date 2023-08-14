import 'styled-components';
import type colors from 'styles/defaultTheme/colors';
import { WallpaperEffect } from 'styles/defaultTheme/wallpaper';
import sizes from 'styles/defaultTheme/sizes';
import formats from 'styles/defaultTheme/formats';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    formats: typeof formats;
    sizes: typeof sizes;
    wallpaper?: WallpaperEffect;
  }
  export function useTheme(): DefaultTheme;
}
