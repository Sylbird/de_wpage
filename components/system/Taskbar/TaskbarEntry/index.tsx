import StyledTaskbarEntry from 'components/system/Taskbar/TaskbarEntry/StyledTaskbarEntry';

type TaskbarEntryProps = {
  icon: string;
  title: string;
};

const TaskbarEntry = ({ icon, title }: TaskbarEntryProps): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <img src={icon} alt={title} />
    </figure>
  </StyledTaskbarEntry>
);

export default TaskbarEntry;
