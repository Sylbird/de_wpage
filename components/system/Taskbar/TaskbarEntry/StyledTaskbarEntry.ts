import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  display: flex;
  height: 100%;
  min-width: ${({ theme }) => theme.sizes.taskbar.entry.minWidth};
  place-content: center;

  &::before {
    //border-bottom: 3px solid #76b9ed; //Off: 3px #9f9a97 ON: 3px #76b9ed
    border-bottom: ${({ theme }) => `
        ${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.highlight}
      `};
    border-radius: 3px;
    bottom: 3px;
    content: '';
    position: absolute;
    width: 18px; //Off: 9px On: 18px
  }

  figure {
    align-items: center;
    display: flex;
    justify-content: center;
    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.iconSize};
      width: ${({ theme }) => theme.sizes.taskbar.entry.iconSize};
    }
  }
`;

export default StyledTaskbarEntry;
