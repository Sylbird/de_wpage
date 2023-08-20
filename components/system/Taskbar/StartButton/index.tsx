import StyledStartButton from 'components/system/Taskbar/StartButton/StyledStartButton';
import StartButtonIcon from 'components/system/Taskbar/StartButton/StartButtonIcon';
import { ProcessConsumer } from 'contexts/process';

const StartButton: FC = () => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        onClick={() => open('HelloWorld')}
        onDoubleClick={() => close('HelloWorld')}
      >
        <StartButtonIcon />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
