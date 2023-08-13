import styled from 'styled-components';

const StyledClock = styled.div`
  background-color: #00c57a;
  display: flex;
  height: 100%;
  place-content: center;
  place-items: center;
  position: absolute;
  right: 0;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
