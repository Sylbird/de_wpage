import { SessionConsumer } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';

const StyledApp: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = themes.defaultTheme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
