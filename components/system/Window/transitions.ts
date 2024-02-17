import { TRANSITION_IN_SECONDS } from 'utils/constants';

export const windowOpenCloseTransition = {
  animate: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0.95 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: TRANSITION_IN_SECONDS }
};
