import StyledWindow from 'components/system/Window/StyledWindow';
import { useProcesses } from 'contexts/process';
import { ProcessComponentProps } from 'components/system/RenderProcess';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();

  return <StyledWindow $minimized={minimized}>{children}</StyledWindow>;
};

export default Window;
