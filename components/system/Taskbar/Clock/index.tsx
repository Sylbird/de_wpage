import StyledClock from 'components/system/Taskbar/Clock/StyledClock';
import { useCallback, useState } from 'react';
import useSyncedClock from 'components/system/Taskbar/Clock/useSyncedClock';
import useLocaleDateTime from 'components/system/Taskbar/Clock/useLocaleDateTime';

const Clock = (): JSX.Element => {
  const [now, setNow] = useState(new Date());
  const { numericDate, date, time } = useLocaleDateTime(now);
  const updateClock = useCallback(() => setNow(new Date()), []);

  useSyncedClock(updateClock);

  return (
    <StyledClock title={date}>
      <div suppressHydrationWarning>{time}</div>
      <div>{numericDate}</div>
    </StyledClock>
  );
};

export default Clock;
