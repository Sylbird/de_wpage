import Home from 'pages/index';
import StyledApp from 'components/StyledApp';

import { render } from '@testing-library/react';

test('renders Home page', () => {
    const { getByText } = render(
        <StyledApp>
            <Home />
        </StyledApp>
    
    );

    expect(getByText('Hello, World!')).toBeInTheDocument();
});