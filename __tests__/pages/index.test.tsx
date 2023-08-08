import Home from 'pages/index';
import StyledApp from 'components/pages/StyledApp';

import { render } from '@testing-library/react';
import themes from 'styles/themes';

test('renders Home page', () => {
  const { getByText } = render(
    <StyledApp currentTheme={themes.defaultTheme}>
      <Home />
    </StyledApp>
  );

  expect(getByText('Hello, World!')).toBeInTheDocument();
});
