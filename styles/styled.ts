import 'styled-components';
import type colors from 'styles/defaultTheme/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
  }
}
