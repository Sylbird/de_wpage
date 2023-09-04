import StyledWindow from 'components/system/Window/StyledWindow';
import { useProcesses } from 'contexts/process';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import Titlebar from 'components/system/Window/Titlebar';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();

  return (
    <StyledWindow $minimized={minimized}>
      <Titlebar id={id} />
      {children}
    </StyledWindow>
  );
};

export default Window;
