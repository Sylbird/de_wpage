import FileManager from 'components/system/Files/FileManager';
import { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import { useProcesses } from 'contexts/process';
import { useEffect } from 'react';

const FileExplorer = ({ id }: ComponentProcessProps) => {
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

  return url ? <FileManager url={url} /> : <></>;
};

export default FileExplorer;
