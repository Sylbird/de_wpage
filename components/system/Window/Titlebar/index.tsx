import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';
import Button from 'styles/custom/Button';
import StyledTitlebar from 'components/system/Window/Titlebar/StyledTitlebar';
import {
  CloseIcon,
  MaximizeIcon,
  MinimizeIcon
} from 'components/system/Window/Titlebar/TitlebarIcons';

type TitlebarProps = {
  id: string;
};

const Titlebar = ({ id }: TitlebarProps): JSX.Element => {
  const {
    close,
    maximize,
    minimize,
    processes: {
      [id]: { icon, title }
    }
  } = useProcesses();

  const onMinimize = useCallback(() => minimize(id), [id, minimize]);
  const onMaximize = useCallback(() => minimize(id), [id, minimize]);
  const onClose = useCallback(() => minimize(id), [id, minimize]);

  return (
    <StyledTitlebar>
      <h1>
        <figure>
          <img src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav>
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
