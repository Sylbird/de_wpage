import Content from 'components/system/Window/Content';
import RndWindow from 'components/system/Window/RndWindow';
import StyledWindow from 'components/system/Window/StyledWindow';
import Titlebar from 'components/system/Window/Titlebar';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import { useProcesses } from 'contexts/process';
import { useRef } from 'react';
import useFocusable from 'components/system/Window/useFocusable';
import { useSession } from 'contexts/session';

const Window: FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;
  const windowRef = useRef<HTMLElement | null>(null);
  const { zIndex, ...focusableProps } = useFocusable(id, windowRef);

  return (
    <RndWindow id={id} zIndex={zIndex}>
      <StyledWindow
        $foreground={isForeground}
        $maximized={maximized}
        $minimized={minimized}
        ref={windowRef}
        {...focusableProps}
      >
        <Titlebar id={id} />
        <Content>{children}</Content>
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
