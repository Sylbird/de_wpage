import StyledTaskbarEntry from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry';
import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';
import Button from 'styles/custom/Button';
import Image from 'styles/custom/Image';

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): JSX.Element => {
  const { minimize } = useProcesses();
  const onClick = useCallback(() => minimize(id), [id, minimize]);

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
