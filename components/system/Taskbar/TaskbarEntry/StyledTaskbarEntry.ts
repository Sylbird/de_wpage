import styled from 'styled-components';

type StyledTaskbarEntryProps = {
  $foreground?: boolean;
};

const StyledTaskbarEntry = styled.li<StyledTaskbarEntryProps>`
  background-color: ${({ $foreground, theme }) =>
    $foreground ? theme.colors.taskbar.entry.active : ''};
  border-radius: ${({ theme }) => theme.sizes.taskbar.entry.border.radius};
  display: flex;
  height: 100%;
  min-width: ${({ theme }) => theme.sizes.taskbar.entry.minWidth};
  place-content: center;

  &:active {
    img {
      transform: scale(0.75);
    }
    background-color: ${({ theme }) =>
      theme.colors.taskbar.lowHover} !important;
  }

  &:hover {
    background-color: ${({ $foreground, theme }) =>
      $foreground
        ? theme.colors.taskbar.activeHover
        : theme.colors.taskbar.hover};
    transition: 0.1s ease;
  }

  &::before {
    border-bottom: ${({ $foreground, theme }) =>
      $foreground
        ? `
        ${theme.sizes.taskbar.entry.border.height} solid ${theme.colors.fileEntry.activeBar}
      `
        : `
        ${theme.sizes.taskbar.entry.border.height} solid ${theme.colors.fileEntry.inactiveBar}
      `};
    border-radius: ${({ theme }) => theme.sizes.taskbar.entry.border.radius};
    bottom: 1px;
    content: '';
    position: absolute;
    transition: 0.3s ease;
    width: ${({ $foreground, theme }) =>
      $foreground
        ? theme.sizes.taskbar.entry.border.activeWidth
        : theme.sizes.taskbar.entry.border.inactiveWidth};
  }

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
