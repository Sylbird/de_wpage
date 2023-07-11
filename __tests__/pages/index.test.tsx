import { render, screen } from '@testing-library/react';

import Home from 'pages/index';

test('renders Home page', () => {
    const { getByText } = render(<Home />);
    const HelloWorldElement = getByText('Hello, World!');

    expect(HelloWorldElement).toBeInTheDocument();
})