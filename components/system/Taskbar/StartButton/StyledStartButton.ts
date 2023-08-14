import styled from 'styled-components';

const StyledStartButton = styled.button.attrs({
  title: 'Start'
})`
  background-color: transparent;
  display: flex;
  height: 100%;
  left: 0;
  place-content: center;
  place-items: center;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startButton.width};

  svg {
    height: ${({ theme }) => theme.sizes.startButton.iconSize};
  }
`;

export default StyledStartButton;
