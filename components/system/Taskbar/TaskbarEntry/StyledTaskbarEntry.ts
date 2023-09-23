import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  &:active {
    img {
      transform: scale(0.75);
    }
    background-color: ${({ theme }) =>
      theme.colors.taskbar.lowHover} !important;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }

  &::before {
    border-bottom: ${({ theme }) => `
        ${theme.sizes.taskbar.entry.border.height} solid ${theme.colors.fileEntry.inactiveBar}
      `};
    border-radius: ${({ theme }) => theme.sizes.taskbar.entry.border.radius};
    bottom: 1px;
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.sizes.taskbar.entry.border.inactiveWidth};
  }

  border-radius: ${({ theme }) => theme.sizes.taskbar.entry.border.radius};
  display: flex;
  height: 100%;
  min-width: ${({ theme }) => theme.sizes.taskbar.entry.minWidth};
  place-content: center;

  figure {
    align-items: center;
    display: flex;
    justify-content: center;
    img {
      transition: transform 0.05s ease;
      height: ${({ theme }) => theme.sizes.taskbar.entry.iconSize};
      width: ${({ theme }) => theme.sizes.taskbar.entry.iconSize};
    }
  }
`;

export default StyledTaskbarEntry;
