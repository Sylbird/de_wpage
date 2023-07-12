import Home from 'pages/index';
import theme from 'components/theme';

import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';


test('renders Home page', () => {
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    
    );
    const HelloWorldElement = getByText('Hello, World!');

    expect(HelloWorldElement).toBeInTheDocument();
})