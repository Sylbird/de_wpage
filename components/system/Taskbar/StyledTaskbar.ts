import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  align-items: center;
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  position: absolute;
  width: 100vw;
  z-index: 2;
`;

export default StyledTaskbar;
