import StyledClock from 'components/system/Taskbar/Clock/StyledClock';
import useLocaleDateTime from 'components/system/Taskbar/Clock/useLocaleDateTime';
import useClock from 'components/system/Taskbar/Clock/useClock';

const Clock = (): JSX.Element => {
  const now = useClock();
  const { numericDate, date, time } = useLocaleDateTime(now);

  return (
    <StyledClock title={date}>
      <div suppressHydrationWarning>{time}</div>
      <div>{numericDate}</div>
    </StyledClock>
  );
};

export default Clock;
