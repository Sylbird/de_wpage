import { styled } from 'styled-components';

const StyledFileEntry = styled.li`
  border-radius: 3px;
  display: flex;

  &:focus-within {
    background-color: ${({ theme }) =>
      theme.colors.fileEntry.backgroundFocused};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};
    position: relative;
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      word-break: break-word;

      figcaption {
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        line-height: 1.2;
        margin: 1px 0px;
        padding: 2px 0px;
        text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
      }

      img {
        max-height: ${({ theme }) => theme.sizes.fileEntry.iconSize};
        max-width: ${({ theme }) => theme.sizes.fileEntry.iconSize};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }
`;

export default StyledFileEntry;
