import styled from 'styled-components';

type StyledMenuProps = {
  x: number;
  y: number;
};

const StyledMenu = styled.nav<StyledMenuProps>`
  border: 1px solid rgba(63, 64, 67);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  font-size: 12px;
  height: fit-content;
  overflow: hidden;
  padding: 4px 4px;
  position: absolute;
  transform: ${({ x, y }) => `translate(${x}px, ${y}px);`};
  width: fit-content;

  ol {
    hr {
      background-color: rgba(255, 255, 255, 0.25);
      height: 1px;
      margin: 3px 0px;
    }

    figure {
      border-radius: 4px;
      display: flex;
      padding: 3px 0;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      figcaption {
        margin-left: 32px;
        margin-right: 64px;
        position: relative;
        top: -1px;

        &.primary {
          font-weight: 600;
        }
      }

      img {
        margin: 0 -24px 0 8px;
      }
    }
  }
`;

export default StyledMenu;
