import styled from 'styled-components';

const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window.background};
  position: absolute;
`;

export default StyledWindow;
