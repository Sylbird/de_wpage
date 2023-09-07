import { useProcesses } from 'contexts/process';
import Button from 'styles/custom/Button';
import Image from 'styles/custom/Image';
import StyledTitlebar from 'components/system/Window/Titlebar/StyledTitlebar';
import {
  CloseIcon,
  MaximizeIcon,
  MinimizeIcon
} from 'components/system/Window/Titlebar/TitlebarIcons';
import useWindowsActions from 'hooks/useWindowActions';

type TitlebarProps = {
  id: string;
};

const Titlebar = ({ id }: TitlebarProps): JSX.Element => {
  const {
    processes: {
      [id]: { icon, title }
    }
  } = useProcesses();

  const { onClose, onMaximize, onMinimize } = useWindowsActions(id);

  return (
    <StyledTitlebar className="handle acrylic">
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
        <Button onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button onClick={onClose} className="close">
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
