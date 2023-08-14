import StyledClock from 'components/system/Taskbar/Clock/StyledClock';
import { useCallback, useState } from 'react';
import useSyncedClock from 'components/system/Taskbar/Clock/useSyncedClock';
import useLocaleTimeDate from 'components/system/Taskbar/Clock/useLocaleTimeDate';

const Clock = (): JSX.Element => {
  const [now, setNow] = useState(new Date());
  const { numericDate, date, time } = useLocaleTimeDate(now);
  const updateClock = useCallback(() => setNow(new Date()), [setNow]);

  useSyncedClock(updateClock);

  return (
    <StyledClock title={date} suppressHydrationWarning>
      {time}
      <div>{numericDate}</div>
    </StyledClock>
  );
};

export default Clock;
