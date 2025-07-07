import { styled } from 'styled-components';

const StyledFileEntry = styled.li`
  border-radius: 3px;
  display: flex;
  height: min-content;
  padding: 2px 2px 0px 2px;

  &:focus-within {
    background-color: ${({ theme }) =>
      theme.colors.fileEntry.backgroundFocused};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};
    position: relative;
  }

  &:focus-within {
    figcaption {
      -webkit-line-clamp: initial;
      z-index: 1;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      gap: 2px;
      align-items: center;
      word-break: break-word;
      picture {
        align-items: flex-end;
        display: flex;
        height: 48px;
        justify-content: center;
        width: 48px;

        img {
          max-height: ${({ theme }) => theme.sizes.fileEntry.iconSize};
          max-width: ${({ theme }) => theme.sizes.fileEntry.iconSize};
        }
      }

      figcaption {
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        color: ${({ theme }) => theme.colors.text};
        display: -webkit-box;
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        line-height: 15px;
        overflow: hidden;
        padding-bottom: 3px;
        text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
      }
    }
  }
`;

export default StyledFileEntry;
