import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';

const StyledApp: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={themes.defaultTheme}>{children}</ThemeProvider>
  </>
);

export default StyledApp;
