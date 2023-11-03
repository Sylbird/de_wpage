import { useProcesses } from 'contexts/process';
import Button from 'styles/custom/Button';
import Image from 'styles/custom/Image';
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

type TitlebarProps = {
  id: string;
};

const Titlebar = ({ id }: TitlebarProps): JSX.Element => {
  const {
    processes: {
      [id]: { autoSizing, icon, maximized, title }
    }
  } = useProcesses();
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;

  const { onClose, onMaximize, onMinimize } = useWindowsActions(id);

  return (
    <StyledTitlebar
      $foreground={isForeground}
      className={rndDefaults.dragHandleClassName + ' acrylic'}
    >
      <h1>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onMaximize} disabled={autoSizing}>
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
