import StyledWindow from 'components/system/Window/StyledWindow';
import { useProcesses } from 'contexts/process';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import Titlebar from 'components/system/Window/Titlebar';
import { Rnd } from 'react-rnd';
import useResizable from 'hooks/useResizableAndDraggable';
import rndDefaults from 'utils/rndDefaults';
import useResizableAndDraggable from 'hooks/useResizableAndDraggable';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const { height, width, updateSize, x, y, updatePosition } =
    useResizableAndDraggable(maximized);

  return (
    <Rnd
      enableResizing={!maximized}
      onDragStop={updatePosition}
      onResizeStop={updateSize}
      position={{ x, y }}
      size={{ height, width }}
      {...rndDefaults}
    >
      <StyledWindow $minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
