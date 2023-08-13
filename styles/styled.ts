import 'styled-components';
import type colors from 'styles/defaultTheme/colors';
import { WallpaperEffect } from 'styles/defaultTheme/wallpaper';
import sizes from 'styles/defaultTheme/sizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    sizes: typeof sizes;
    wallpaper?: WallpaperEffect;
  }
  export function useTheme(): DefaultTheme;
}
