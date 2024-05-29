import { useProcesses } from 'contexts/process';
import Button from 'styles/custom/Button';
import Icon from 'styles/custom/Icon';
import StyledTitlebar from 'components/system/Window/Titlebar/StyledTitlebar';
import {
  CloseIcon,
  MaximizedIcon,
  MaximizeIcon,
  MinimizeIcon
} from 'components/system/Window/Titlebar/TitlebarIcons';
import useWindowsActions from 'components/system/Window/Titlebar/useWindowActions';
import rndDefaults from 'components/system/Window/RndWindow/defaults';
import { useSession } from 'contexts/session';
import useDoubleClick from 'hooks/useDoubleClick';
import { useMemo } from 'react';

type TitlebarProps = {
  id: string;
};

const Titlebar = ({ id }: TitlebarProps): JSX.Element => {
  const {
    processes: { [id]: process }
  } = useProcesses();
  const { autoSizing, icon, lockAspectRatio, maximized, title } = process || {};
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;

  const { onClose, onMaximize, onMinimize } = useWindowsActions(id);

  const isMaximizable = useMemo(
    () => autoSizing && !lockAspectRatio,
    [autoSizing, lockAspectRatio]
  );

  return (
    <StyledTitlebar
      $foreground={isForeground}
      className={
        (maximized ? rndDefaults.cancel : rndDefaults.dragHandleClassName) +
        ' acrylic'
      }
      onDragStart={maximized ? () => undefined : onMaximize}
    >
      <Button
        onClick={useDoubleClick(isMaximizable ? () => undefined : onMaximize)}
      >
        <figure>
          <Icon src={icon} alt={title} $imgSize={16} />
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
      <nav className="cancel">
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onMaximize} disabled={isMaximizable}>
          {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
        </Button>
        <Button onClick={onClose} className="close">
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
