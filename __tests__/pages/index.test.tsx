import Home from 'pages/index';

import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import StyledApp from 'components/StyledApp';


test('renders Home page', () => {
    const { getByText } = render(
        <StyledApp>
            <Home />
        </StyledApp>
    
    );
    const HelloWorldElement = getByText('Hello, World!');

    expect(HelloWorldElement).toBeInTheDocument();
})