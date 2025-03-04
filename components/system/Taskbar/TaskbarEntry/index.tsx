import StyledTaskbarEntry from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry';
import useNextFocusable from 'components/system/Window/useNextFocusable';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import Button from 'styles/custom/Button';
import Icon from 'styles/custom/Icon';

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): React.JSX.Element => {
  const nextFocusableId = useNextFocusable(id);
  const { foregroundId, setForegroundId } = useSession();
  const isForeground = id === foregroundId;
  const {
    linkElement,
    minimize,
    processes: { [id]: process }
  } = useProcesses();
  const { minimized } = process || {};
  const linkTaskbarEntry = useCallback(
    (taskbarEntry: HTMLButtonElement | HTMLDivElement | null) => {
      if (taskbarEntry) {
        linkElement(id, 'taskbarEntry', taskbarEntry);
      }
    },
    [id, linkElement]
  );
  const onClick = useCallback(() => {
    if (minimized || isForeground) {
      minimize(id);
    }
    setForegroundId(isForeground ? nextFocusableId : id);
  }, [id, minimize, minimized, isForeground, setForegroundId, nextFocusableId]);

  return (
    <StyledTaskbarEntry $foreground={isForeground} title={title}>
      <Button onClick={onClick} ref={linkTaskbarEntry}>
        <figure>
          <Icon src={icon} alt={title} $imgSize={24} />
        </figure>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
