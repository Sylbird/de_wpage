import Home from 'pages/index';
import StyledApp from 'components/pages/StyledApp';

import { render, screen } from '@testing-library/react';

test('renders Home page', () => {
  render(
    <StyledApp>
      <Home />
    </StyledApp>
  );

  expect(screen.getByRole('main')).toBeInTheDocument();
});
