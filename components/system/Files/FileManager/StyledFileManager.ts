import StyledWindow from 'components/system/Window/StyledWindow';
import { styled } from 'styled-components';

const StyledFileManager = styled.ol`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(
    auto-fill,
    ${({ theme }) => theme.sizes.fileManager.gridEntryWidth}
  );
  grid-template-rows: repeat(
    auto-fill,
    ${({ theme }) => theme.sizes.fileManager.gridEntryHeight}
  );
  height: calc(100% - ${({ theme }) => theme.sizes.taskbar.height});
  padding: ${({ theme }) => theme.sizes.fileManager.padding};
  row-gap: ${({ theme }) => theme.sizes.fileManager.rowGap};

  main > & {
    padding-bottom: 15px;
  }

  ${StyledWindow} & {
    grid-auto-flow: row;
  }
`;

export default StyledFileManager;
