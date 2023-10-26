import styled from 'styled-components';

type StyledWindowProps = {
  $maximized?: boolean;
  $minimized?: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  border-radius: ${({ $maximized = false }) =>
    $maximized ? '0px' : ({ theme }) => theme.sizes.window.border.radius};
  box-shadow: ${({ theme }) => theme.colors.window.shadow};
  display: ${({ $minimized = false }) => ($minimized ? 'none' : 'block')};
  height: 100%;
  outline: ${({ theme }) => theme.colors.window.outline};
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export default StyledWindow;
