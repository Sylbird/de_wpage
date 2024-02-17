import FileManager from 'components/system/Files/FileManager';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import { useProcesses } from 'contexts/process';
import { useEffect, useMemo } from 'react';

const FileExplorer = ({ id }: ProcessComponentProps) => {
  const {
    title,
    processes: { [id]: process }
  } = useProcesses();
  const { url = '' } = process || {};
  const path = useMemo(() => url || '/', [url]);

  useEffect(() => title(id, path), [id, path, title]);

  return <FileManager directory={path} />;
};

export default FileExplorer;
