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
    //border-bottom: 3px solid #76b9ed; //Off: 3px #9f9a97 ON: 3px #76b9ed
    border-bottom: ${({ theme }) => `
        ${theme.sizes.taskbar.entry.border.size} solid ${theme.colors.highlight}
      `};
    border-radius: ${({ theme }) => theme.sizes.taskbar.entry.border.radius};
    bottom: 0px;
    content: '';
    position: absolute;
    width: ${({ theme }) =>
      theme.sizes.taskbar.entry.border.maxWidth}; //Off: 9px On: 18px
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
