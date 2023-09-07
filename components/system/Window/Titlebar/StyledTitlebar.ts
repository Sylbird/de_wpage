import { styled } from 'styled-components';

const StyledTitlebar = styled.header`
  > * {
    z-index: 0;
  }

  display: flex;
  > h1 {
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: 400;
    height: ${({ theme }) => theme.sizes.titleBar.height}px;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      img {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        margin-right: ${({ theme }) => theme.sizes.titleBar.iconMarginRight};
        width: ${({ theme }) => theme.sizes.titleBar.iconSize};
      }
    }
  }

  nav {
    display: flex;

    button {
      display: flex;
      place-content: center;
      place-items: center;
      transition: background-color 0.4s;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      &:hover {
        background-color: rgba(26, 26, 26, 1);

        &.close {
          background-color: rgb(200, 15, 30);
        }
      }

      svg {
        fill: rgb(255, 255, 255);
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }
    }
  }
`;

export default StyledTitlebar;
