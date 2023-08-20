import styled from 'styled-components';

const StyledStartButton = styled.button.attrs({
  title: 'Start'
})`
  &:active {
    svg {
      transform: scale(0.75);
    }
    background-color: ${({ theme }) =>
      theme.colors.taskbar.lowHover} !important;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
    svg {
      .path0 {
        fill: rgb(255, 255, 255);
      }

      .path1 {
        fill: rgb(152, 232, 236);
      }

      .path2 {
        fill: rgb(255, 0, 0);
      }
    }
  }

  background-color: transparent;
  border-radius: 5px;
  display: flex;
  height: calc(100% - ${({ theme }) => theme.sizes.taskbar.margin});
  left: 3px;
  place-content: center;
  place-items: center;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startButton.width};

  svg {
    transition: transform 0.05s ease;
    height: ${({ theme }) => theme.sizes.startButton.iconSize};
    .path0,
    .path1,
    .path2 {
      transition: fill 0.3s ease;
    }
    .path0 {
      fill: rgb(255, 255, 255);
    }

    .path1 {
      fill: rgb(201, 201, 201);
    }

    .path2 {
      fill: rgb(100, 100, 100);
    }
  }
`;

export default StyledStartButton;
