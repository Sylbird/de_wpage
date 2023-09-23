import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  column-gap: 5px;
  display: flex;
  height: calc(100% - ${({ theme }) => theme.sizes.taskbar.margin});
  left: calc(
    ${({ theme }) => theme.sizes.startButton.width} +
      ${({ theme }) => theme.sizes.taskbar.margin}
  );
  position: absolute;
  right: calc(
    ${({ theme }) => theme.sizes.clock.width} +
      ${({ theme }) => theme.sizes.taskbar.margin}
  );
`;

export default StyledTaskbarEntries;
