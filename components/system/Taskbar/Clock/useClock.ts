import { useCallback, useState } from 'react';
import useSyncedClock from 'components/system/Taskbar/Clock/useSyncedClock';

const useClock = () => {
  const [now, setNow] = useState(new Date());
  const updateClock = useCallback(() => setNow(new Date()), []);

  useSyncedClock(updateClock);

  return now;
};

export default useClock;
