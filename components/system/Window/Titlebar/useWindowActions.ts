import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import useNextFocusable from 'components/system/Window/useNextFocusable';
import { WINDOW_TRANSITION_DURATION_IN_MILLISECONDS } from 'utils/constants';

type WindowActions = {
  onMinimize: React.MouseEventHandler;
  onMaximize: React.MouseEventHandler;
  onClose: React.MouseEventHandler;
};

const useWindowsActions = (id: string): WindowActions => {
  const nextFocusable = useNextFocusable(id);
  const { setForegroundId, setStackOrder } = useSession();
  const { close, maximize, minimize } = useProcesses();
  const onMinimize = useCallback(() => {
    minimize(id);
    setForegroundId(nextFocusable);
  }, [id, minimize, setForegroundId, nextFocusable]);
  const onMaximize = useCallback(() => maximize(id), [id, maximize]);
  const onClose = useCallback(() => {
    setStackOrder((currentStackOrder) =>
      currentStackOrder.filter((stackid) => stackid !== id)
    );
    close(id, true);
    setTimeout(() => close(id), WINDOW_TRANSITION_DURATION_IN_MILLISECONDS);
    setForegroundId(nextFocusable);
  }, [setStackOrder, id, close, setForegroundId, nextFocusable]);

  return { onClose, onMaximize, onMinimize };
};

export default useWindowsActions;
