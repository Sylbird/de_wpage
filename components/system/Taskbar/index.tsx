import StyledTaskbar from 'components/system/Taskbar/StyledTaskbar';
import StartButton from 'components/system/Taskbar/StartButton';
import TaskbarEntries from 'components/system/Taskbar/TaskbarEntries';
import Clock from 'components/system/Taskbar/Clock';

const Taskbar: FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
