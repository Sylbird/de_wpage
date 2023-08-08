import { SessionConsumer } from 'contexts/session';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

type StyledAppsProps = { currentTheme: DefaultTheme };

const StyledApp: FC<StyledAppsProps> = ({ children, currentTheme }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = currentTheme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
