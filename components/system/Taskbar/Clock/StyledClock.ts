import styled from 'styled-components';

const StyledClock = styled.time`
  background-color: #00c57a;
  height: 100%;
  position: absolute;
  right: 0;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
