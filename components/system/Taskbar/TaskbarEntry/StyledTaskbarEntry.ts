import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  background-color: #fff;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
`;

export default StyledTaskbarEntry;
