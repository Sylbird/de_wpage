import { useSession } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';
import { DEFAULT_THEME } from 'utils/constants';

const StyledApp: FC = ({ children }) => {
  const { themeName } = useSession();

  return (
    <ThemeProvider theme={themes[themeName] || themes[DEFAULT_THEME]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledApp;
