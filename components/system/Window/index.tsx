import Content from 'components/system/Window/Content';
import RndWindow from 'components/system/Window/RndWindow';
import StyledWindow from 'components/system/Window/StyledWindow';
import Titlebar from 'components/system/Window/Titlebar';
import { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import { useProcesses } from 'contexts/process';
import { useRef } from 'react';
import useFocusable from 'components/system/Window/useFocusable';
import { useSession } from 'contexts/session';
import useWindowTransitions from 'components/system/Window/useWindowTransitions';

const Window: FC<ComponentProcessProps> = ({ children, id }) => {
  const {
    processes: { [id]: process }
  } = useProcesses();
  const { maximized } = process || {};
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;
  const windowRef = useRef<HTMLElement | null>(null);
  const { zIndex, ...focusableProps } = useFocusable(id, windowRef);
  const windowTransitions = useWindowTransitions(id, windowRef);

  return (
    <RndWindow id={id} zIndex={zIndex}>
      <StyledWindow
        $foreground={isForeground}
        $maximized={maximized}
        ref={windowRef}
        {...focusableProps}
        {...windowTransitions}
      >
        <Titlebar id={id} />
        <Content>{children}</Content>
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
