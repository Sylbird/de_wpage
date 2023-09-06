import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';

type WindowActions = {
  onMinimize: React.MouseEventHandler;
  onMaximize: React.MouseEventHandler;
  onClose: React.MouseEventHandler;
};

const useWindowsActions = (id: string): WindowActions => {
  const { close, maximize, minimize } = useProcesses();
  const onMinimize = useCallback(() => minimize(id), [id, minimize]);
  const onMaximize = useCallback(() => maximize(id), [id, maximize]);
  const onClose = useCallback(() => close(id), [id, close]);

  return { onClose, onMaximize, onMinimize };
};

export default useWindowsActions;
