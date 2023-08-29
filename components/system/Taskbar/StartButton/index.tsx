import StyledStartButton from 'components/system/Taskbar/StartButton/StyledStartButton';
import StartButtonIcon from 'components/system/Taskbar/StartButton/StartButtonIcon';

const StartButton: FC = () => (
  <StyledStartButton title="Start">
    <StartButtonIcon />
  </StyledStartButton>
);

export default StartButton;
