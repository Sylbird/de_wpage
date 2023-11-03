import { styled } from 'styled-components';

type StyledTitlebarProps = {
  $foreground: boolean;
};

const StyledTitlebar = styled.header<StyledTitlebarProps>`
  display: flex;
  height: ${({ theme }) => theme.sizes.titleBar.height}px;

  > * {
    z-index: 0;
  }

  > h1 {
    display: flex;
    color: ${({ $foreground, theme }) =>
      $foreground
        ? theme.colors.titleBar.text
        : theme.colors.titleBar.textInactive};
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
        background-color: ${({ theme }) => theme.colors.titleBar.hover};
        svg {
          fill: ${({ theme }) => theme.colors.titleBar.text};
        }
        &.close {
          background-color: ${({ theme }) => theme.colors.titleBar.closeHover};
        }
      }

      &:disabled {
        svg {
          fill: ${({ theme }) => theme.colors.titleBar.buttonInactive};
        }

        &:hover {
          background-color: inherit;
        }
      }

      svg {
        fill: ${({ $foreground, theme }) =>
          $foreground
            ? theme.colors.titleBar.text
            : theme.colors.titleBar.buttonInactive};
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }
    }
  }
`;

export default StyledTitlebar;
