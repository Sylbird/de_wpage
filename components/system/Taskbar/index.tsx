import StyledTaskbar from 'components/system/Taskbar/StyledTaskbar';
import StartButton from 'components/system/Taskbar/StartButton';
import TaskbarEntries from 'components/system/Taskbar/TaskbarEntries';
import Clock from 'components/system/Taskbar/Clock';

const Taskbar: FC = () => (
  <StyledTaskbar className="acrylic">
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
