import 'styled-components';
import type colors from 'styles/defaultTheme/colors';
import { WallpaperEffect } from 'styles/defaultTheme/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    wallpaper: WallpaperEffect;
  }
  export function useTheme(): DefaultTheme;
}
