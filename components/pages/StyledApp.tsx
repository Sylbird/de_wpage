import { SessionConsumer } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';
import { DEFAULT_THEME } from 'utils/constants';

//TODO: setup themeName on ThemeProvider
const StyledApp: FC = ({ children }) => {
  return (
    <>
      <SessionConsumer>
        {({ themeName }) => (
          <ThemeProvider theme={themes[themeName] || themes[DEFAULT_THEME]}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        )}
      </SessionConsumer>
    </>
  );
};

export default StyledApp;
