import StyledTaskbarEntry from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry';
import useNextFocusable from 'components/system/Window/useNextFocusable';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import Button from 'styles/custom/Button';
import Image from 'styles/custom/Image';

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): JSX.Element => {
  const nextFocusableId = useNextFocusable(id);
  const { setForegroundId } = useSession();
  const { minimize } = useProcesses();
  const onClick = useCallback(() => {
    minimize(id);
    setForegroundId(nextFocusableId);
  }, [id, minimize, setForegroundId, nextFocusableId]);

  return (
    <StyledTaskbarEntry>
      <Button onClick={onClick}>
        <figure>
          <Image src={icon} alt={title} />
        </figure>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
