import { styled } from 'styled-components';

const StyledContent = styled.div`
  background-color: ${({ theme }) => theme.colors.window.background};
  height: calc(100% - ${({ theme }) => theme.sizes.titleBar.height}px);
`;

export default StyledContent;
