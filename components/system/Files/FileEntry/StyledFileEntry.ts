import { styled } from 'styled-components';

const StyledFileEntry = styled.li`
  border-radius: 5px;
  padding: 2px;

  &:hover {
    background-color: rgba(162, 186, 205, 0.25);
    position: relative;
  }
  button {
    position: relative;

    figure {
      figcaption {
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        color: ${({ theme }) => theme.colors.text};
        text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
      }

      img {
        height: ${({ theme }) => theme.sizes.fileEntry.iconSize};
        width: ${({ theme }) => theme.sizes.fileEntry.iconSize};

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
