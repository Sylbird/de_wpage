import StyledWindow from 'components/system/Window/StyledWindow';
import Titlebar from 'components/system/Window/Titlebar';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import { useProcesses } from 'contexts/process';
import RndWindow from 'components/system/Window/RndWindow';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();

  return (
    <RndWindow id={id}>
      <StyledWindow $minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
