import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/themes';

type StyledAppProps = {
  children: ReactNode;
}

const StyledApp: FC<StyledAppProps> = ({ children }) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </>
);

export default StyledApp;