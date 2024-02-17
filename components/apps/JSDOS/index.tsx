import type { ProcessComponentProps } from 'components/system/RenderProcess';
import { useProcesses } from 'contexts/process';
import { useRef } from 'react';
import StyledJSDOS from 'components/apps/JSDOS/StyledJSDOS';
import useJSDOS from 'components/apps/JSDOS/useJSDOS';

const JSDOS = ({ id }: ProcessComponentProps) => {
  const {
    processes: { [id]: process }
  } = useProcesses();
  const { url = '' } = process || {};
  const screenRef = useRef<HTMLDivElement | null>(null);

  useJSDOS(id, url, screenRef);

  return <StyledJSDOS ref={screenRef} />;
};

export default JSDOS;
