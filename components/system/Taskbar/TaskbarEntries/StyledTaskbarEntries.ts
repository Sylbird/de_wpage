import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  background-color: #6200ff;
  height: 100%;
  left: ${({ theme }) => theme.sizes.startButton.width};
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledTaskbarEntries;
