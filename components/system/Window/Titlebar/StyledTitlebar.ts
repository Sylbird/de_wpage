import { styled } from 'styled-components';

const StyledTitlebar = styled.header`
  display: flex;
  height: ${({ theme }) => theme.sizes.titleBar.height}px;

  > * {
    z-index: 0;
  }

  > h1 {
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;

      img {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        margin-right: ${({ theme }) => theme.sizes.titleBar.iconMarginRight};
        width: ${({ theme }) => theme.sizes.titleBar.iconSize};
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: 1px solid transparent;
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      transition: background-color 0.4s;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      &:hover {
        background-color: ${({ theme }) => theme.colors.titlebar.hover};

        &.close {
          background-color: ${({ theme }) => theme.colors.titlebar.closeHover};
        }
      }

      &:disabled {
        svg {
          opacity: 0.2;
        }

        &:hover {
          background-color: inherit;
        }
      }

      svg {
        fill: ${({ theme }) => theme.colors.text};
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }
    }
  }
`;

export default StyledTitlebar;
