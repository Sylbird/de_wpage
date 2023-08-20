import styled from 'styled-components';

const StyledClock = styled.div`
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.taskbar.lowHover} !important;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }

  border-radius: ${({ theme }) => theme.sizes.border.radius};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.sizes.clock.fontSize};
  height: calc(100% - ${({ theme }) => theme.sizes.taskbar.margin});
  place-content: center;
  place-items: center;
  position: absolute;
  right: 3px;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
