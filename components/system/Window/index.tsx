import StyledWindow from 'components/system/Window/StyledWindow';
import Titlebar from 'components/system/Window/Titlebar';
import useRnd from 'hooks/useRnd';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import { Rnd } from 'react-rnd';
import { useProcesses } from 'contexts/process';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const rndProps = useRnd(maximized);

  return (
    <Rnd {...rndProps}>
      <StyledWindow $minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
