import FileManager from 'components/system/Files/FileManager';
import { ProcessComponentProps } from 'components/system/RenderProcess';
import { useProcesses } from 'contexts/process';
import { useEffect } from 'react';

const FileExplorer = ({ id }: ProcessComponentProps) => {
  const {
    title,
    processes: { [id]: process }
  } = useProcesses();
  const { url = '' } = process || {};

  useEffect(() => {
    if (url) {
      title(id, url);
    }
  }, [id, title, url]);

  return url ? <FileManager directory={url} /> : <></>;
};

export default FileExplorer;
