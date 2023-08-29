import { styled } from 'styled-components';

const StyledFileEntry = styled.li`
  button {
    position: relative;

    figure {
      figcaption {
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        color: ${({ theme }) => theme.colors.text};
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
